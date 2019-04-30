import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { UserService } from './user.service';
import { take } from 'rxjs/operators';
import {  Role } from '../../core/models/role.model'

@Injectable()
export class AdminGuard implements CanActivate {
    isAdmin = false;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    this.userService.currentUser.subscribe((userData) => {
        if (userData.role === Role.Admin ) {
            return this.isAdmin = true;
        }
    });
    return of(this.isAdmin);

  }
}
