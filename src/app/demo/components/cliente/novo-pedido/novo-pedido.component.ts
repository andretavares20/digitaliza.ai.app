import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { ServicoService } from '../../admin/servicos/services/servico.service';
import { CouponService } from './services/coupon.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import axios from 'axios';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.scss'],
  providers: [MessageService]
})
export class NovoPedidoComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  isDragging = false;
  isLoading = false;
  orderSummaryDialog = false;
  couponCode: string = '';
  discount: number = 0;
  couponApplied = false;
  originalValue: number = 0;

  servicos: any[] = [];
  newOrder: any = {
    files: [],
    observations: '',
    value: 0,
    orderDate: new Date(),
    deliveryDate: null,
    resultUrl: ''
  };

  preferenceId: string = '';

  constructor(
    private servicoService: ServicoService,
    private couponService: CouponService,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadServicos();
  }

  loadServicos() {
    this.servicoService.getServicos().subscribe(data => {
      this.servicos = data;
    });
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let file of files) {
      const objectURL = URL.createObjectURL(file);
      this.newOrder.files.push({ file, objectURL, services: [] });
    }
    this.calculateValue();
  }

  removeFile(index: number) {
    this.newOrder.files.splice(index, 1);
    this.calculateValue();
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
    this.isDragging = true;
  }

  @HostListener('document:dragleave', ['$event'])
  onDragLeave(event: any) {
    if (event.target === document.body) {
      this.isDragging = false;
    }
  }

  @HostListener('document:drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer.files;
    for (let file of files) {
      const objectURL = URL.createObjectURL(file);
      this.newOrder.files.push({ file, objectURL, services: [] });
    }
    this.calculateValue();
  }

  calculateValue() {
    const totalValue = this.newOrder.files.reduce((acc, file) => {
      const fileValue = Object.keys(file.services).reduce((serviceAcc, serviceIdStr) => {
        const serviceId = parseInt(serviceIdStr, 10);
        const service = this.servicos.find(s => s.id === serviceId);
        return serviceAcc + (service && file.services[serviceId] ? service.price : 0);
      }, 0);
      return acc + fileValue;
    }, 0);

    if (!this.couponApplied) {
      this.originalValue = totalValue;
    }

    this.newOrder.value = totalValue - this.discount;
  }

  applyCoupon() {
    if (this.newOrder.value <= 0) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O valor total deve ser maior que zero para aplicar um cupom.' });
      return;
    }

    if (this.couponApplied) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Cupom já aplicado.' });
      return;
    }

    // Verifica o cupom no backend
    this.couponService.verifyCoupon(this.couponCode).subscribe(
      (response: any) => {
        if (response.valid) {
          const discountPercentage = response.discountAmount;

          // Calcula o valor do desconto em reais
          this.discount = this.originalValue * (discountPercentage / 100);

          // Aplica o desconto no valor total
          this.newOrder.value = this.originalValue - this.discount;
          this.couponApplied = true;

          // Exibe mensagem de sucesso
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: `Cupom aplicado! Desconto de ${discountPercentage}%` });
        } else {
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Cupom inválido.' });
        }
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao verificar o cupom.' });
      }
    );
  }

  openOrderSummary() {
    this.isLoading = true;

    if (this.newOrder.value <= 0) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'O valor total deve ser maior que zero.' });
      this.isLoading = false;
      return;
    }

    this.createCheckoutButton();
    this.orderSummaryDialog = true;
  }

  async createCheckoutButton() {
    try {
      // Primeiro, cria a preferência de pagamento no Mercado Pago
      const preferenceResponse = await axios.get(`${environment.apiUrl}/mercadopago/create_preference`);
      this.preferenceId = preferenceResponse.data.preferenceId;
      const userId = this.authService.getUserId();
  
      // Prepara os arquivos e outros detalhes do pedido para upload usando FormData
      const formData = new FormData();
  
      // Adiciona os detalhes do pedido diretamente como campos no FormData
      formData.append('totalValue', this.newOrder.value.toString());
      formData.append('couponCode', this.couponApplied ? this.couponCode : '');
      formData.append('preferenceId', this.preferenceId);
      formData.append('userId', userId.toString());
  
      // Adiciona os arquivos e os serviços associados ao FormData
      const fileServices = this.newOrder.files.map((fileObj: any) => ({
        fileName: fileObj.file.name,
        services: Object.keys(fileObj.services).filter(serviceId => fileObj.services[serviceId])
      }));
  
      formData.append('fileServices', JSON.stringify(fileServices));
  
      this.newOrder.files.forEach((fileObj: any) => {
        formData.append('files', fileObj.file, fileObj.file.name);
      });
  
      // Envia os arquivos e os detalhes do pedido ao backend
      const orderResponse = await axios.post(`${environment.apiUrl}/mercadopago/create_order`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Pedido criado:', orderResponse.data);
  
      const mp = new window['MercadoPago']('TEST-a45e1791-b190-4123-843b-7a4376e382bd');
      await mp.bricks().create("wallet", "wallet_container", {
        initialization: {
          preferenceId: this.preferenceId,
        },
        customization: {
          texts: {
            valueProp: 'smart_option',
          },
        },
      });
  
      await this.updatePreference();
  
      // Após o pagamento, verificar o status
      this.checkPaymentStatus();
  
      this.isLoading = false;
    } catch (error) {
      console.error('Error creating checkout button:', error);
      this.isLoading = false;
    }
  }

  async checkPaymentStatus() {
    try {
      const paymentStatus = true;

      // await axios.post('http://localhost:3000/mercadopago/update_order_status', {
      //   preferenceId: this.preferenceId,
      //   success: paymentStatus,
      // });

      this.messageService.add({
        severity: paymentStatus ? 'success' : 'error',
        summary: paymentStatus ? 'Pagamento realizado com sucesso!' : 'Pagamento recusado!',
        detail: paymentStatus ? 'Seu pedido foi gerado, prossiga para o pagamento.' : 'O pagamento foi recusado, tente novamente.',
      });
    } catch (error) {
      console.error('Erro ao verificar o status do pagamento:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Erro ao verificar o pagamento',
        detail: 'Ocorreu um erro ao verificar o status do pagamento.',
      });
    }
  }

  async updatePreference() {
    try {
      await axios.post(`${environment.apiUrl}/mercadopago/update_preference`, {
        preferenceId: this.preferenceId,
        totalValue: this.newOrder.value
      });
    } catch (error) {
      console.error('Error updating preference:', error);
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar a preferência.' });
    }
  }
}
