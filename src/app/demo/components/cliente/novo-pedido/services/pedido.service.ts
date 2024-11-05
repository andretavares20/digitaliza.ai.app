import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  // Criar um novo pedido
  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, order);
  }

  // Aplicar cupom de desconto
  applyCoupon(couponCode: string, orderId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply-coupon`, { couponCode, orderId });
  }

  // Atualizar status do pedido
  updateOrderStatus(orderId: number, statusUpdate: { status: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/update-status`, { id: orderId, ...statusUpdate });
  }

  // Obter todos os pedidos para visão de admin
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin`);
  }

  // Obter todos os pedidos de um cliente específico
  getOrdersByCliente(clienteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cliente?clienteId=${clienteId}`);
  }

  // Download do resultado de um pedido específico
  downloadOrderResult(orderId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${orderId}`, { responseType: 'blob' });
  }

  // Upload dos resultados de um pedido
  uploadOrderResults(orderId: number, files: File[]) {
    const formData: FormData = new FormData();
    
    files.forEach(file => {
      formData.append('file', file); // Garante que o nome do campo seja 'file'
    });

    return this.http.post(`${this.apiUrl}/upload-results/${orderId}`, formData);
  }

  // Download dos arquivos do cliente em formato ZIP
  downloadCustomerFilesAsZip(orderId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download-customer-files/${orderId}`, { responseType: 'blob' });
  }
}
