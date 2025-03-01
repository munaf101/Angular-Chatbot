import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiauthService {


  private loginUrl = 'http://localhost:80/chatbot/chats/Kodevfusion/dashboard/login_process.php';  
  private dashboardUrl = 'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/index.php'; 
  private veiwquestionsUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/view_questions.php'; 
  private squestionswordUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/list_key_search.php';
  private sviewreportUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/view_report.php'; 

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this.http.post(this.loginUrl, userData, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }

  getDashboardData(): Observable<any> {
    return this.http.get(this.dashboardUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
  getViewquestionData(): Observable<any> {
    return this.http.get(this.veiwquestionsUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
  getSquestionwordData(): Observable<any> {
    return this.http.get(this.squestionswordUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }

  getviewreportData(): Observable<any> {
    return this.http.get(this.sviewreportUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }

  logout() {
    localStorage.removeItem('token');  
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  
  }

  // constructor() { }
}
