import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {Account} from '../account/account.model';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusChangedEvent.subscribe(
      (status) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(new Account(accountName, accountStatus));
    // this.loggingService.logStatusChanged(accountStatus);
  }
}
