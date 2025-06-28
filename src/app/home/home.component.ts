import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  userInput: string = '';
  chatHistory: { role: string, content: string }[] = [];
messages: any;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const messageToSend = this.userInput.trim();
    this.chatHistory.push({ role: 'user', content: messageToSend });

    this.chatService.sendMessage(messageToSend).subscribe({
      next: (response) => {
        const reply = response.choices[0].message.content;
        this.chatHistory.push({ role: 'assistant', content: reply });
      },
      error: (err) => {
        console.error('API Error:', err);
        this.chatHistory.push({ role: 'assistant', content: ' Error fetching response.' });
      }
    });

    this.userInput = '';
  }

  sidebarVisible = false;



}
