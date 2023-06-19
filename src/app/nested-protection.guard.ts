import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HomeService } from './home.service';

export const nestedProtectionGuard: CanActivateChildFn = (childRoute, state) => {

      const homeService = inject(HomeService)
       const router =               inject(Router)
      if(!homeService.isAdmin()){
          alert('Only admin allowed to visit this route')

          return router.navigate(['/login'])
      }
      return true



};
