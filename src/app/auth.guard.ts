import { CanActivateFn, Router } from '@angular/router';
import { HomeService } from './home.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

    const homeService =  inject(HomeService)
     const router =      inject(Router)

     if(!homeService.isLoggedIn()){
           alert('You are not authorized to visit this route, Please Login First')
           router.navigate(['/login'])
           return false

     }
     return true



};
