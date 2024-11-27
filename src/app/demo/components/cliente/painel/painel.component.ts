import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../novo-pedido/services/pedido.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { saveAs } from 'file-saver';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
  providers: [ConfirmationService],
})
export class PainelComponent implements OnInit {
  orders: any[] = [];
  displayCarousel: boolean = false;
  displayOrderDetails: boolean = false;
  paymentDialogVisible: boolean = false;
  selectedOrder: any = null;
  isLoading: boolean = false;
  mpButtonInstance: any;

  carouselImages: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private authService: AuthService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    const clienteId = this.authService.getUserId();
    if (clienteId) {
      const clienteIdNumber = Number(clienteId);
      this.pedidoService.getOrdersByCliente(clienteIdNumber).subscribe(
        (data) => {
          this.orders = data;
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao carregar pedidos.',
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Cliente não autenticado.',
      });
    }
  }

  openPaymentModal(order: any) {
    this.selectedOrder = order;
    this.paymentDialogVisible = true;

    setTimeout(() => {
      this.initializePaymentButton(order);
    }, 0);
  }

  initializePaymentButton(order: any) {
    try {
      if (this.mpButtonInstance) {
        this.mpButtonInstance.unmount();
        this.mpButtonInstance = null;
      }

      const walletContainer = document.getElementById('wallet_container');
      if (walletContainer) {
        walletContainer.innerHTML = ''; // Limpa o container antes de renderizar
      }

      const mp = new window['MercadoPago'](environment.publicKey);
      this.mpButtonInstance = mp.bricks().create('wallet', 'wallet_container', {
        initialization: {
          preferenceId: order.preferenceId,
        },
        customization: {
          texts: {
            valueProp: 'Pague agora pelo Mercado Pago',
          },
        },
      });
    } catch (error) {
      console.error('Erro ao inicializar botão de pagamento:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao inicializar o botão de pagamento.',
      });
    }
  }

  confirmDownloadResult(order: any) {
    this.confirmationService.confirm({
      message: `Deseja baixar o resultado do pedido ${order.id}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.downloadResult(order);
      },
    });
  }

  downloadResult(order: any) {
    this.pedidoService.downloadOrderResult(order.id).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        saveAs(blob, 'resultado_' + order.id + '.pdf');
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Resultado baixado com sucesso.',
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao baixar o resultado do pedido.',
        });
      }
    );
  }

  openCarousel(order: any) {
    this.carouselImages = order.files.map((file: any) => ({
      previewImageSrc: file.fileUrl,
      alt: file.fileName,
      title: file.fileName,
    }));

    this.displayCarousel = true;
    document.body.classList.add('carousel-modal-open');
  }

  closeCarousel() {
    this.displayCarousel = false;
    document.body.classList.remove('carousel-modal-open');
  }

  openOrderDetails(order: any) {
    this.selectedOrder = order;
    this.displayOrderDetails = true;
  }
}
