import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {

  constructor(private authSrv:AuthServiceService, private router:Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
     UrlTree {
    return this.authSrv.areYouLoggedIn$.pipe(take(1), map((variabile)=>{  //se il dato per decidere il return deriva da un observagble allora useremo .pipe(map(()=>{return true})) per generare un observable con return boolean | urlTree e restituiremo quello
      if (variabile){
        return true;
      }
      return this.router.createUrlTree(['/login'])  //rimando alla pagina (in questo caso login) se si va nell'url protetto dalla barra senza permessi

      //return boolean -> accedi/non accedi
      //return urlTree -> redirect
      //return promise/observable -> ritorna una risposta asincrona (canActivate decide cosa fare quando la parte asincrona si risolve (non si usa praticamente quasi mai)
    }));
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |
     UrlTree {

    return this.canActivate(route, state);    //verifica la rotta  e lo stato di attivazione (standard) || stiamo richiamando la logica di sopra senza riscrivere. (serve per le pagine interne (children))
  }

  //esiste anche canDeactivate (per cose tipo "vuoi lasciare questa pagina")
}
