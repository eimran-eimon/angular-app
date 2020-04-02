import {tap} from 'rxjs/operators';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class LoggingInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log('OutGoing Req!');
    console.log(req.url);
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response){
            console.log('InComing Req!');
            console.log(event.body);
          }
        })
      );
  }

}
