import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';


export interface Question {
  id: number;
  title: string;
  intro_message: string;
  parent: number;
  conv_id: string;
  questions: string;
  input_type: string;
  image: string;
  pdf_file: string;
  status: string;
  word_file: string;
}

export interface QuestionResponse {
  question: Question;
  parent_hierarchy: string;
  child_questions: Question[];
  parent_options: {
    parent_id: number;
    title: string;
    hierarchy: string;
  }[];
}

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    role: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiauthService {



  private loginUrl = 'http://localhost:80/chatbot/chats/Kodevfusion/dashboard/login_process.php';  
  private dashboardUrl = 'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/index.php'; 
  private veiwquestionsUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/view_questions.php'; 
  private squestionswordUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/list_key_search.php';
  private sviewreportUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/view_report.php'; 
  private addkeysUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/add_key_search.php'; 
  private get_s_qurl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/get_search_question.php'; 
  private addquestionUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/add_questions.php';
  private editquestionUrl =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API'; 
  private apiUrllogin =  'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API'; 



  

  
  constructor(private http: HttpClient,private router: Router) {
  
  }

  //Dashboard page

  getDashboardData(): Observable<any> {
    return this.http.get(this.dashboardUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }

  //Questions


  getViewquestionData(): Observable<any> {
    return this.http.get(this.veiwquestionsUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
  getQuestionData(): Observable<any> {
    return this.http.get(this.addquestionUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }


  
  getQuestionById(edit_id: number): Observable<QuestionResponse> {
    return this.http.get<QuestionResponse>(`${this.editquestionUrl}/edit_questions.php?edit_id=${edit_id}`);
  }

  // Update question data
  updateQuestion(formData: FormData): Observable<any> {
    return this.http.post(`${this.editquestionUrl}/edit_questions.php`, formData);
  }

  saveQuestion(data: any[]): Observable<any> {
    return this.http.post<any>('http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/save_question.php', data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  // getQuestionById(id: number): Observable<any> {
  //   return this.http.post<any>(this.get_s_qurl, { id });
  // }

  // Search Questions


  getSquestionwordData(): Observable<any> {
    return this.http.get(this.squestionswordUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
  getaddkeysData(): Observable<any> {
    return this.http.get(this.addkeysUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
  saveKeywords(questionId: number, keywords: string[]): Observable<any> {
    const payload = { question_id: questionId, keywords: keywords };
    return this.http.post<any>('http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/save_key.php', payload);
  }

  
  getSQuestionById(id: number): Observable<any> {
    return this.http.post<any>(this.get_s_qurl, { id });
  }

  //Report

  getviewreportData(): Observable<any> {
    return this.http.get(this.sviewreportUrl, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
  }
 

  // Operator





    //login

    // login(userData: any): Observable<any> {
    //   return this.http.post(this.loginUrl, userData, {headers: { 'Content-Type': 'application/json' }, withCredentials: true });
    // }
    // logout() {
    //   localStorage.removeItem('token');  
    // }
  
    // isLoggedIn(): boolean {
    //   return !!localStorage.getItem('token');  
    // }
  
     // Change this to your PHP server URL
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrllogin}/login_process.php`, { email, password })
      .pipe(
        tap(response => {
          if (response.success) {
            // Store token and user data in localStorage
            localStorage.setItem('auth_token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  logout(): void {
    // Clear local storage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    
    // Update logged in status
    this.isLoggedInSubject.next(false);
    
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
  // Method to check if user is logged in (can be used in route guards)
  isAuthenticated(): boolean {
    return this.hasToken();
  }
  // saveQuestion(parent: number, conv_id: string[], intro_message: string[], title: string[], questions: string[],status: string[]): Observable<any> {
  //   const payload = { parent: parent, conv_id: conv_id ,intro_message:intro_message,title:title,questions:questions,status:status};
  //   return this.http.post<any>('http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/save_question.php', payload);
  // }
  

  

  
  

  // saveKeyword(questionId: number, keyword: string): Observable<any> {
  //   const payload = { question_id: questionId, keyword: keyword };
  //   return this.http.post<any>('http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/save_key.php', payload);
  // }
  


  // constructor() { }
}
