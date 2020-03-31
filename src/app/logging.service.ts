import {Injectable} from '@angular/core';

@Injectable()
export class LoggingService {
  logStatusChanged(status: string) {
    console.log('Status changed: ' + status);
  }
}
