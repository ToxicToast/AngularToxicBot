import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from '@chat/chat-routing.module';
import { ChatIndexContainerComponent } from '@chat/containers/chat-index-container/chat-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatIndexContainerComponent
  ],
  providers: [

  ]
})
export class ChatModule { }
