import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NeilYoungPlaylistComponent } from './browse/neil-young-layout.component';
import { HomeLayoutComponent } from './browse/home-layout.component';
import { JoniPlaylistComponent } from './browse/joni-layout.component';
import { AlistPopPlaylistComponent } from './browse/alist-pop-layout.component';
import { RBNowPlaylistComponent } from './browse/rb-now-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Neil-Young', component: NeilYoungPlaylistComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Joni-Mitchell', component: JoniPlaylistComponent},
  {path: 'a-list-pop', component: AlistPopPlaylistComponent},
  {path: 'rb-now', component: RBNowPlaylistComponent},
  
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
