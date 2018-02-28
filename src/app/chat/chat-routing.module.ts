import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatIndexContainerComponent } from '@chat/containers/chat-index-container/chat-index-container.component';

const routes: Routes = [
  { path: '', component: ChatIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
