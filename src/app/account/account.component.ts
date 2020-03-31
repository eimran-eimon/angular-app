import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {Account} from './account.model';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.statusChanged({id: this.id, newStatus: status});
    this.accountsService.statusChangedEvent.emit(status);
    // this.loggingService.logStatusChanged(status);
  }
}
