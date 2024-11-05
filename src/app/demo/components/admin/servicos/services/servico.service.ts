import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private adminApiUrl = `${environment.apiUrl}/admin/servicos`;
  private clientApiUrl = `${environment.apiUrl}/client/servicos`;

  constructor(private http: HttpClient) { }

  // Busca todos os serviços (admin)
  getServicos(): Observable<any[]> {
    return this.http.get<any[]>(this.clientApiUrl);
  }

  // Adiciona um novo serviço (admin)
  addServico(servico: any): Observable<any> {
    return this.http.post<any>(this.adminApiUrl, servico);
  }

  // Atualiza um serviço existente (admin)
  updateServico(servico: any): Observable<any> {
    return this.http.put<any>(`${this.adminApiUrl}/${servico.id}`, servico);
  }

  // Deleta um serviço pelo ID (admin)
  deleteServico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.adminApiUrl}/${id}`);
  }
}
