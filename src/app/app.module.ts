import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterOutlet} from "@angular/router";
import { ChatComponent } from './chat/chat.component';
import {Rest} from "./service/rest";
import { InvitecardComponent } from './invitecard/invitecard.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    InvitecardComponent,
    MessageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        HttpClientModule,
        CommonModule
    ],
  providers: [Rest],
  bootstrap: [AppComponent]
})
export class AppModule { }
