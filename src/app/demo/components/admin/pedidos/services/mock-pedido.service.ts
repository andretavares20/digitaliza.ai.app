import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockPedidoService {

  private pedidos = [
    { id: 1, name: 'Pedido 1', status: 'Pendente', date: '2023-01-01', user: 'Usuário A', orderNumber: 1001, results: [] },
    { id: 2, name: 'Pedido 2', status: 'Em andamento', date: '2023-02-01', user: 'Usuário B', orderNumber: 1002, results: [] },
    { id: 3, name: 'Pedido 3', status: 'Concluído', date: '2023-03-01', user: 'Usuário C', orderNumber: 1003, results: [] },
  ];

  getPedidos(): Observable<any[]> {
    return of(this.pedidos);
  }

  importResult(pedidoId: number, files: File[]): Observable<any> {
    const pedido = this.pedidos.find(p => p.id === pedidoId);
    if (pedido) {
      for (let file of files) {
        console.log('Arquivo importado:', file);
        const objectURL = URL.createObjectURL(file);
        pedido.results.push({ name: file.name, objectURL });
      }
    }
    return of({ success: true });
  }

  updatePedidoStatus(pedidoId: number, status: string): Observable<any> {
    const pedido = this.pedidos.find(p => p.id === pedidoId);
    if (pedido) {
      pedido.status = status;
    }
    return of({ success: true });
  }
}
