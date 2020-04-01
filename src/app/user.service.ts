import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  subjectEmitter = new Subject<boolean>();
}
