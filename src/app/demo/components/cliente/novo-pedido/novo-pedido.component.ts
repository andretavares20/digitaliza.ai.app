import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MockServicoService } from '../../admin/servicos/services/mock-servico.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.scss']
})
export class NovoPedidoComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  isDragging = false;
  showPaymentButton = false;
  isLoading = true; // Variável para controlar o estado do spinner

  servicos: any[] = [];
  newOrder: any = {
    files: [],
    services: {},
    observations: '',
    value: 0,
    orderDate: new Date(),
    deliveryDate: null,
    resultUrl: ''
  };

  constructor(private servicoService: MockServicoService, private router: Router) { }

  ngOnInit() {
    this.createCheckoutButton();
    this.loadServicos();
    
  }

  loadServicos() {
    this.servicoService.getServicos().subscribe(data => {
      this.servicos = data;
      this.servicos.forEach(servico => {
        this.newOrder.services[servico.name] = false;
      });
    });
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let file of files) {
      const objectURL = URL.createObjectURL(file);
      this.newOrder.files.push({ file, objectURL });
    }
  }

  removeFile(index: number) {
    this.newOrder.files.splice(index, 1);
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
      this.newOrder.files.push({ file, objectURL });
    }
  }

  calculateValue() {
    this.newOrder.value = this.servicos.reduce((acc, servico) => {
      return acc + (this.newOrder.services[servico.name] ? servico.price : 0);
    }, 0);
  }

  goToPayment() {
    this.router.navigate(['/pagamento']);
  }

  async createCheckoutButton() {
    try {
      const response = await axios.get('http://localhost:3000/create_preference');
      const preferenceId = response.data.preferenceId;

      const mp = new window['MercadoPago']('TEST-a45e1791-b190-4123-843b-7a4376e382bd');
      await mp.bricks().create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
        customization: {
          texts: {
            valueProp: 'smart_option',
          },
        },
      });

      this.isLoading = false; // Desativa o spinner e o desfoque após a criação do botão
    } catch (error) {
      console.error('Error creating preference:', error);
      this.isLoading = false; // Certifique-se de desativar o spinner em caso de erro
    }
  }
}
