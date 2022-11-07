import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';


const url='http://localhost:5000/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  message:string='';
  from:string=''
  messages:any[]=[]
  status='';

  connection:any;

  ngOnInit(): void {
    this.connection=new HubConnectionBuilder()
                        .withUrl(url)
                        .build();

    this.connection.on('Broadcast',(info:any)=> this.messages.push(info));
     this.connect();
  }

  async connect(){
    this.status='connecting';
    try{

      await this.connection.start();
      this. status='connected';

    }catch(error:any){
      this.status='failed:'+error.message;
    }
  }

  sendMessage(){
    this.messages.push({from:this.from,message:this.message});
    this.connection.invoke('OnMessage',this.from,this.message);
  }

}
