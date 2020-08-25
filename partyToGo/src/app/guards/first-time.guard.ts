import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class FirstTimeGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    if(await this.storage.get('isSlidesShow')){
      return true;
    } else {
      this.router.navigateByUrl('/slides');
    }
  }
}
