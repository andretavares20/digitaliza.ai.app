import { Component, AfterViewInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

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
      const response = await axios.get(`${environment.apiUrl}/create_preference`);
      const preferenceId = response.data.preferenceId;

      const mp = new window['MercadoPago']('APP_USR-1802293093399013-073020-35dc3c2ad278358c917c78fc117b9677-511926509');
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
