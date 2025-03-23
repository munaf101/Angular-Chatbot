import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatAPIService {

  // constructor() { }

  
  private apiUrl = 'http://localhost:80/chatbot/chats/Kodevfusion/Angular_dashboard_API/operator.php'; // Replace with your API URL
  private currentChatId = new BehaviorSubject<number | null>(null);
  private refreshInterval = 1000; // 3 seconds

  // BehaviorSubjects for real-time updates
  private queueData = new BehaviorSubject<any[]>([]);
  private requestsData = new BehaviorSubject<any[]>([]);
  private transfersData = new BehaviorSubject<any[]>([]);
  private messagesData = new BehaviorSubject<any[]>([]);
  private customerInfo = new BehaviorSubject<any>(null);
  private agentsData = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    // Start polling for data
    this.startPolling();
  }

  // Getters for the BehaviorSubjects
  get queueData$(): Observable<any[]> {
    return this.queueData.asObservable();
  }

  get requestsData$(): Observable<any[]> {
    return this.requestsData.asObservable();
  }

  get transfersData$(): Observable<any[]> {
    return this.transfersData.asObservable();
  }

  get messagesData$(): Observable<any[]> {
    return this.messagesData.asObservable();
  }

  get customerInfo$(): Observable<any> {
    return this.customerInfo.asObservable();
  }

  get agentsData$(): Observable<any[]> {
    return this.agentsData.asObservable();
  }

  get currentChatId$(): Observable<number | null> {
    return this.currentChatId.asObservable();
  }

  // Set current chat ID
  setCurrentChatId(chatId: number | null): void {
    this.currentChatId.next(chatId);
    if (chatId) {
      this.fetchCustomerInfo(chatId);
    } else {
      this.customerInfo.next(null);
    }
  }

  // Start polling for data
  private startPolling(): void {
    // Poll for queue data
    interval(this.refreshInterval).pipe(
      switchMap(() => this.fetchQueueData())
    ).subscribe();

    // Poll for requests data
    interval(this.refreshInterval).pipe(
      switchMap(() => this.fetchRequests())
    ).subscribe();

    // Poll for transfers data
    interval(this.refreshInterval).pipe(
      switchMap(() => this.fetchTransfers())
    ).subscribe();

    // Poll for messages when chat is active
    interval(this.refreshInterval).pipe(
      switchMap(() => {
        const chatId = this.currentChatId.value;
        if (chatId) {
          return this.fetchMessages(chatId);
        }
        return [];
      })
    ).subscribe();

    // Load agents list once
    this.fetchAgents().subscribe();
  }

  // Queue data (Ongoing chats)
  fetchQueueData(): Observable<any[]> {
    return this.http.post<any>(this.apiUrl, { action: 'get_queue_data' }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.queueData.next(response.data);
          return response.data;
        }
        return [];
      })
    );
  }

  // Requests data (Agent queue)
  fetchRequests(): Observable<any[]> {
    return this.http.post<any>(this.apiUrl, { action: 'get_requests' }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.requestsData.next(response.data);
          return response.data;
        }
        return [];
      })
    );
  }

  // Transfers data
  fetchTransfers(): Observable<any[]> {
    return this.http.post<any>(this.apiUrl, { action: 'get_transfers' }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.transfersData.next(response.data);
          return response.data;
        }
        return [];
      })
    );
  }

  // Accept a request
  acceptRequest(raId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'accept_request', 
      ra_id: raId 
    }).pipe(
      map(response => {
        console.log('Requests API response:', response); // Add this line
        if (response.status === 'success') {
          this.setCurrentChatId(raId);
          this.fetchRequests().subscribe();
        }
        return response;
      })
    );
  }

  // Accept a transfer
  acceptTransfer(taId: number, raId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'accept_transfer', 
      ta_id: taId,
      ra_id: raId
    }).pipe(
      map(response => {
        console.log('Requests API response:', response); // Add this line
        if (response.status === 'success') {
          this.setCurrentChatId(raId);
          this.fetchTransfers().subscribe();
        }
        return response;
      })
    );
  }

  // Reject a transfer
  rejectTransfer(taId: number, raId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'reject_transfer', 
      ta_id: taId,
      ra_id: raId
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.fetchTransfers().subscribe();
        }
        return response;
      })
    );
  }

  // Send a message
  sendMessage(chatId: number, message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'send_message', 
      chat_id: chatId,
      message: message
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.fetchMessages(chatId).subscribe();
        }
        return response;
      })
    );
  }
  chatUser: any = null; // ✅ Define chatUser here

  // Get messages
  fetchMessages(chatId: number): Observable<any[]> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'get_messages', 
      chat_id: chatId
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          console.log(response)
          this.messagesData.next(response.data);
          this.chatUser = response.user; // Save user data
          console.log('Chat User:', this.chatUser); // Check karein user data
          return response.data;
        }
        return [];
      })
    );
  }

  // Close chat
  closeChat(chatId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'close_chat', 
      chat_id: chatId
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.setCurrentChatId(null);
          this.messagesData.next([]); // ✅ Messages clear karne ka code
          this.chatUser = null; // ✅ Name aur Phone Number clear
          this.fetchRequests().subscribe();
        }
        return response;
      })
    );
  }

  // Transfer to another agent
  transferTo(requestId: number, agentId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'transfer_to', 
      request_id: requestId,
      agent_id: agentId
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.setCurrentChatId(null);
        }
        return response;
      })
    );
  }

  // Get available agents
  fetchAgents(): Observable<any[]> {
    return this.http.post<any>(this.apiUrl, { action: 'get_agents' }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.agentsData.next(response.data);
          return response.data;
        }
        return [];
      })
    );
  }

  // Get customer info
  fetchCustomerInfo(chatId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { 
      action: 'get_customer_info', 
      chat_id: chatId
    }).pipe(
      map(response => {
        if (response.status === 'success') {
          this.customerInfo.next(response.data);
          return response.data;
        }
        return null;
      })
    );
  }


}



