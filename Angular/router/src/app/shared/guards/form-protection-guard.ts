import { CanDeactivateFn } from '@angular/router';
import { User } from '../../components/user';

export const formProtectionGuard: CanDeactivateFn<User> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const canINavigate = component.CanDeactivate();
  return canINavigate;
};
