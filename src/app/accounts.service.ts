import {Account} from './account/account.model';
import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Dummy Account', 'unknown')
  ];

  statusChangedEvent = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}

  addAccount(account: Account){
    this.accounts.push(account);
    this.loggingService.logStatusChanged(account.status);
  }

  statusChanged(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChanged(updateInfo.newStatus);
  }

}
