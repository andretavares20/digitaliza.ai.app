import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.scss']
})
export class NovoPedidoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  isDragging = false;

  newOrder: any = {
    files: [],
    services: {
      upscale: false,
      vetorization: false,
      fineAdjustment: false
    },
    observations: '',
    value: 0,
    orderDate: new Date(),
    deliveryDate: null,
    resultUrl: ''
  };

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let file of files) {
      const objectURL = URL.createObjectURL(file);
      this.newOrder.files.push({ ...file, objectURL });
    }
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
      this.newOrder.files.push({ ...file, objectURL });
    }
  }

  calculateValue() {
    const serviceValues = {
      upscale: 50,
      vetorization: 100,
      fineAdjustment: 75
    };
    this.newOrder.value = Object.keys(this.newOrder.services).reduce((acc, service) => {
      return acc + (this.newOrder.services[service] ? serviceValues[service] : 0);
    }, 0);
  }

  goToPayment() {
    this.calculateValue();
    // Lógica para redirecionar para a página de pagamento
  }
}
