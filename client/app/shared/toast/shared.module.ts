import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { ToastComponent } from './toast.component';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    // Shared Modules

    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // Shared Components
    ToastComponent,
    LoadingComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
