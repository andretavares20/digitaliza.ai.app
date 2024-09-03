import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MockServicoService } from '../../admin/servicos/services/mock-servico.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { MessageService } from 'primeng/api';

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
  couponCode: string = ''; // Variável para armazenar o código do cupom
  discount: number = 0; // Variável para armazenar o valor do desconto
  couponApplied = false; // Variável para verificar se o cupom foi aplicado
  originalValue: number = 0; // Variável para armazenar o valor antes do desconto

  servicos: any[] = [];
  newOrder: any = {
    files: [],
    services: {},
    observations: '',
    value: 0, // Valor total com ou sem desconto aplicado
    orderDate: new Date(),
    deliveryDate: null,
    resultUrl: ''
  };

  preferenceId: string = '';

  constructor(private servicoService: MockServicoService, private router: Router, private messageService: MessageService) { }

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
      this.newOrder.files.push({ file, objectURL, services: {} });
      this.servicos.forEach(servico => {
        this.newOrder.files[this.newOrder.files.length - 1].services[servico.name] = false;
      });
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
      this.newOrder.files.push({ file, objectURL, services: {} });
      this.servicos.forEach(servico => {
        this.newOrder.files[this.newOrder.files.length - 1].services[servico.name] = false;
      });
    }
    this.calculateValue();
  }

  calculateValue() {
    // Calcula o valor total antes do desconto
    const totalValue = this.newOrder.files.reduce((acc, file) => {
      const fileValue = Object.keys(file.services).reduce((serviceAcc, serviceName) => {
        const service = this.servicos.find(s => s.name === serviceName);
        return serviceAcc + (file.services[serviceName] ? service.price : 0);
      }, 0);
      return acc + fileValue;
    }, 0);

    // Salva o valor original se o cupom ainda não foi aplicado
    if (!this.couponApplied) {
      this.originalValue = totalValue;
    }

    // Aplica o desconto se houver
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

    if (this.couponCode === 'DIGITALIZEAI10') {
      this.discount = this.originalValue * 0.10; // 10% de desconto
      this.couponApplied = true; // Marca que o cupom foi aplicado
      this.messageService.add({ severity: 'success', summary: 'Cupom aplicado', detail: '10% de desconto aplicado!' });
    } else {
      this.discount = 0;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Cupom inválido.' });
    }
    this.calculateValue(); // Recalcula o valor total com o desconto aplicado
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
      const response = await axios.get('http://localhost:3000/mercadopago/create_preference');
      this.preferenceId = response.data.preferenceId;

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

      // Atualiza a preferência com o valor total atualizado
      await this.updatePreference();

      this.isLoading = false; // Desativa o spinner após a criação do botão
    } catch (error) {
      console.error('Error creating preference:', error);
      this.isLoading = false; // Certifique-se de desativar o spinner em caso de erro
    }
  }

  async updatePreference() {
    try {
      await axios.post('http://localhost:3000/mercadopago/update_preference', {
        preferenceId: this.preferenceId,
        totalValue: this.newOrder.value
      });

      // A tela de pagamento será aberta automaticamente após o clique no botão do MercadoPago.
    } catch (error) {
      console.error('Error updating preference:', error);
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar a preferência.' });
    }
  }
}
