import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private apiUrl = `${environment.apiUrl}/orders/apply-coupon`;  // URL do endpoint de verificação de cupom

  constructor(private http: HttpClient) {}

  verifyCoupon(couponCode: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { couponCode });
  }
}
