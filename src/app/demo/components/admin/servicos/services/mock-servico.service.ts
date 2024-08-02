import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockServicoService {
  private servicos: any[] = [
    { id: 1, name: 'Melhorar imagem', price: 50 },
    { id: 2, name: 'Vetorização', price: 100 },
    { id: 3, name: 'Ajuste fino', price: 75 },
  ];

  getServicos() {
    return of(this.servicos);
  }

  addServico(servico: any) {
    servico.id = this.servicos.length + 1;
    this.servicos.push(servico);
    return of(servico);
  }

  updateServico(servico: any) {
    const index = this.servicos.findIndex(s => s.id === servico.id);
    if (index > -1) {
      this.servicos[index] = servico;
    }
    return of(servico);
  }

  deleteServico(id: number) {
    this.servicos = this.servicos.filter(s => s.id !== id);
    return of({ success: true });
  }
}
