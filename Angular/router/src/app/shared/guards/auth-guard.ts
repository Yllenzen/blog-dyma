import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const { answer } = await (await fetch('https://yesno.wtf/api')).json();
  return answer === 'yes' ? true : router.parseUrl('/forbidden');
};
