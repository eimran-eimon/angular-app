import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = 'Server Name';
  isServerCreated = false;
  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server Created!!! Name of the server: ' + this.serverName;
  }

  updateServerName(event: Event){
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
