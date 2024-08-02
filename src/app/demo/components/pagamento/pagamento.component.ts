import { Component, AfterViewInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.createCheckoutButton();
  }

  async createCheckoutButton() {
    try {
      const response = await axios.get('http://localhost:3000/create_preference');
      const preferenceId = response.data.preferenceId;

      const mp = new window['MercadoPago']('TEST-a45e1791-b190-4123-843b-7a4376e382bd');
      mp.bricks().create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
        customization: {
          texts: {
            valueProp: 'smart_option',
          },
        },
      });
    } catch (error) {
      console.error('Error creating preference:', error);
    }
  }
}
