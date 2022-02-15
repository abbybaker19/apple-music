import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Neil-Young', component: NeilYoungPlaylistComponent},
  {path: 'home', component: HomeLayoutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
