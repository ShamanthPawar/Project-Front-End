import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AllSportsComponent } from './components/sports/all-sports/all-sports.component';
import { AllEventsComponent } from './components/events/all-events/all-events.component';
import { AllPlayersComponent } from './components/players/all-players/all-players.component';
import { AllParticipantsComponent } from './components/participants/all-participants/all-participants.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard/sports',
    component:AllSportsComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard/events',
    component:AllEventsComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard/players',
    component:AllPlayersComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard/participants',
    component:AllParticipantsComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
