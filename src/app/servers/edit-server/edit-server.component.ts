import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentDeactivate} from '../../can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {isRelativePath} from '@angular/compiler-cli/ngcc/src/utils';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean;
  isChangedSaved = false;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const editPermission = +this.activatedRoute.snapshot.queryParams.allowEdit;
    if (editPermission === 1) {
      this.allowEdit = true;
    } else {
      this.allowEdit = false;
    }
    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isChangedSaved = true;
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowEdit){
      return true; // false means, you can't change the page
    }
    if (((this.serverName !== this.server.name) || (this.serverStatus !== this.server.status)) && !this.isChangedSaved) {
      return confirm('Are you sure?');
    }else {
      return true;
    }
  }

}
