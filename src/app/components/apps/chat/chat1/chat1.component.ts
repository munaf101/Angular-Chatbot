import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatAPIService } from 'src/app/Service/chat-api.service';
import { DefaultTableData } from 'src/app/shared/data/table/defaultTableData';
// import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.scss']
})
export class Chat1Component implements OnInit {

    public defaultData = DefaultTableData;  
  public isCollapsed9 = false;
  public isClosed9 = false;

  active:any;



  
  // constructor() { }



  // ngOnInit(): void {
  
  // }

  //////


  queueData: any[] = [];
  requestsData: any[] = [];
  transfersData: any[] = [];
  messagesData: any[] = [];
  customerInfo: any = null;
  agentsData: any[] = [];
  currentChatId: number | null = null;
  message: string = '';
  selectedAgent: string = '';
  
  private subscriptions: Subscription[] = [];
  // @Input() chatUser: any; // ✅ Parent se user data receive karne ke liye
  // chatUser: any = null; // ✅ Define Property
  chatUser: any; // Add this if not already declared


 

  constructor(private chatService: ChatAPIService) {}

  ngOnInit(): void {
    // Subscribe to data changes
    this.subscriptions.push(
      this.chatService.queueData$.subscribe(data => this.queueData = data),
      this.chatService.requestsData$.subscribe(data => this.requestsData = data),
      this.chatService.transfersData$.subscribe(data => this.transfersData = data),
      this.chatService.messagesData$.subscribe(data => this.messagesData = data),
      this.chatService.customerInfo$.subscribe(data => this.customerInfo = data),
      this.chatService.agentsData$.subscribe(data => this.agentsData = data),
      this.chatService.currentChatId$.subscribe(id => {
        this.currentChatId = id;
        if (id) {
          this.fetchMessages(id); // Fetch messages and update chatUser
        }
      })
    );
    
    // Initial data fetch
    this.chatService.fetchQueueData().subscribe();
    this.chatService.fetchRequests().subscribe();
    this.chatService.fetchTransfers().subscribe();
    this.chatService.fetchAgents().subscribe();

  }

  fetchMessages(chatId: number): void {
    this.chatService.fetchMessages(chatId).subscribe(messages => {
      this.chatUser = this.chatService.chatUser; // ✅ Update chatUser from API
      console.log('Updated chatUser:', this.chatUser); // Debugging
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Accept a request
  acceptRequest(raId: number): void {
    this.chatService.acceptRequest(raId).subscribe();
  }

  // Accept a transfer
  acceptTransfer(taId: number, raId: number): void {
    this.chatService.acceptTransfer(taId, raId).subscribe();
  }

  // Reject a transfer
  rejectTransfer(taId: number, raId: number): void {
    this.chatService.rejectTransfer(taId, raId).subscribe();
  }

  // Send a message
  sendMessage(): void {
    if (this.currentChatId && this.message.trim()) {
      this.chatService.sendMessage(this.currentChatId, this.message).subscribe(
        () => {
          this.message = ''; // Clear message after sending
        }
      );
    }
  }

  // Close chat
  closeChat(): void {
    if (this.currentChatId) {
      this.chatService.closeChat(this.currentChatId).subscribe();
      this.chatUser = null; // ✅ Chat close hone per clear karna

    }
  }

  // Transfer to another agent
  transferTo(): void {
    if (this.currentChatId && this.selectedAgent) {
      this.chatService.transferTo(this.currentChatId, parseInt(this.selectedAgent)).subscribe();
    }
  }



  /////


  Collapsetoggle9() {
    this.isCollapsed9 = !this.isCollapsed9;
  }
  Closetoggle9() {
    this.isClosed9 = true
  }
  
  cardClose(){
    document.addEventListener('toggle', () => {
      let card:any = document.querySelector('card')
      card.classList.add('card-collapsed');
    })
  }
  toggleClass = "fe fe-maximize";
  public fullScreen: boolean = false;
  fullScreenToggle() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }
  fullScreenToggle1() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }
  
}
