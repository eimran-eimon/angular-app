export class AuthService {
  isLogin = false;

  isAuthenticate(){
   return new Promise(
     (resolve, reject) => {
       setTimeout(() => {
         resolve(this.isLogin);
       }, 1500);
     }
   );
  }


  login(){
    this.isLogin = true;
  }
  logOut(){
    this.isLogin = false;
  }
}
