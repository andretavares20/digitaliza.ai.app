import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  orders: any[] = [];
  newOrderDialogVisible = false;
  newOrder: any = {
    files: [],
    details: [],
    observations: '',
    value: 0,
    orderDate: new Date(),
    deliveryDate: null,
    resultUrl: ''
  };
  services = [
    { name: 'Upscale', value: 50, selected: false },
    { name: 'Vetorização', value: 100, selected: false },
    { name: 'Ajuste Fino', value: 75, selected: false }
  ];

  ngOnInit() {
    this.orders = [
      {
        fileName: 'imagem1.jpg',
        status: 'Pendente',
        details: ['Upscale', 'Vetorização', 'Ajuste Fino'],
        paymentMethod: 'Cartão de Crédito',
        value: 100,
        orderDate: new Date('2024-07-01'),
        deliveryDate: null,
        resultUrl: 'assets/FRED1.jpeg'
      },
      {
        fileName: 'imagem2.png',
        status: 'Em andamento',
        details: ['Vetorização'],
        paymentMethod: 'Boleto',
        value: 200,
        orderDate: new Date('2024-07-02'),
        deliveryDate: null,
        resultUrl: 'assets/FRED2.jpeg'
      },
      {
        fileName: 'imagem3.gif',
        status: 'Concluído',
        details: ['Ajuste Fino'],
        paymentMethod: 'PayPal',
        value: 150,
        orderDate: new Date('2024-07-03'),
        deliveryDate: new Date('2024-07-05'),
        resultUrl: 'assets/FRED3.jpeg'
      }
    ];
  }

  showNewOrderDialog() {
    this.newOrderDialogVisible = true;
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.newOrder.files.push(file);
    }
  }

  calculateValue() {
    this.newOrder.value = this.services
      .filter(service => service.selected)
      .reduce((acc, service) => acc + service.value, 0);
  }

  goToPayment() {
    this.newOrderDialogVisible = false;
    const selectedServices = this.services.filter(service => service.selected).map(service => service.name);
    this.orders.push({
      ...this.newOrder,
      status: 'Pendente',
      details: selectedServices,
      orderDate: new Date(),
      resultUrl: 'assets/new_order_placeholder.jpeg'
    });
    // Redirecionar para a página de pagamento
    // Aqui você pode adicionar lógica para redirecionar para uma tela de pagamento
    this.newOrder = {
      files: [],
      details: [],
      observations: '',
      value: 0,
      orderDate: new Date(),
      deliveryDate: null,
      resultUrl: ''
    };
    this.services.forEach(service => service.selected = false);
  }

  downloadResult(order: any) {
    const link = document.createElement('a');
    link.href = order.resultUrl;
    link.download = order.fileName;
    link.click();
  }
}
