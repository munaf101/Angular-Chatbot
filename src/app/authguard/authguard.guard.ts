import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  // ConfigurableFocusTrapFactory();
  const router = inject(Router); // ✅ Properly inject Router
  const userId = sessionStorage.getItem('user_id'); // ✅ Check user session

  if (userId) {
    return true; // ✅ Allow access
  } else {
    router.navigate(['/auth/login']); // ✅ Redirect to login
    return false; // ❌ Block access
  }
  // return true;
};
