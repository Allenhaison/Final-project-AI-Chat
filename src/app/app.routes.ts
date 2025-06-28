import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'feedback', component:FeedbackComponent},
  {path: 'helpcenter', component:HelpcenterComponent}
];
