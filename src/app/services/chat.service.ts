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
      'HTTP-Referer': 'http://localhost:4200',
      'X-Title': 'Angular DeepSeek App'
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
