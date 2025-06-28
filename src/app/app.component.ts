import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way data binding
import { RouterModule, RouterOutlet } from '@angular/router';
import {  LayoutComponent } from "./sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, RouterOutlet, RouterModule, LayoutComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  }

