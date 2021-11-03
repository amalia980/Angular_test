import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-servers',//but if we put a dot before app here. it is recognized as a class. you have to put class="app-server" in your html file. no ID though. just classes. but you cannot use "hover effect and so on"
  /*
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';//value pre-put, but can leave this string empty
  serverCreated = false;

  //username
  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
