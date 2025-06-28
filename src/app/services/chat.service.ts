import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private apiKey = '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';

  constructor(private http: HttpClient) {}

  sendMessage(userMessage: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
       'HTTP-Referer': 'https://allenhaison.github.io/Final-project-AI-Chat/',
      'X-Title': 'Final Project AI Chat'
    });

    const body = {
      model: 'deepseek/deepseek-r1-0528:free',
      messages: [
        {
          role: 'user',
          content: userMessage
        }
      ]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
