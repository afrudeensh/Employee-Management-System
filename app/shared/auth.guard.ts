import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,ActivatedRoute, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivateFn,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(localStorage.getItem('logindata')){
    return true;
  }else{
    alert("you can't access this page without login!")
    this.router.navigate(["/"])
    return false;

  }
    
  }
}