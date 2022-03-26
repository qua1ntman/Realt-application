import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-chat-for-admin',
  templateUrl: './admin-chat-for-admin.component.html',
  styleUrls: ['./admin-chat-for-admin.component.css']
})
export class AdminChatForAdminComponent implements OnInit {

  chats: any[] = [1, 2, 3]

  ngOnInit(): void {
  }

}
