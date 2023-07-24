import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from "@angular/router";
import { ChatComponent } from './chat/chat.component';
import { InvitecardComponent } from './invitecard/invitecard.component';
import { MessageComponent } from './message/message.component';
import { SubscribecardComponent } from './subscribecard/subscribecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    InvitecardComponent,
    MessageComponent,
    SubscribecardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        HttpClientModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
