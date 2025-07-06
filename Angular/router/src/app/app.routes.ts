import { Routes } from '@angular/router';
import { Homepage } from './components/homepage';
import { Users } from './components/users';
import { Notfound } from './components/notfound';
import { User } from './components/user';
import { authGuard } from './shared/guards/auth-guard';
import { Forbidden } from './components/forbidden';
import { answerResolver } from './shared/guards/answer-resolver';
import { formProtectionGuard } from './shared/guards/form-protection-guard';

export const routes: Routes = [
  {
    path: 'users',
    // canActivate: [authGuard],
    // canActivateChild: [authGuard],
    component: Users,
    resolve: {
      answer: answerResolver,
    },
    // data: {
    //   users: '',
    // },

    children: [
      {
        path: ':id',
        canDeactivate: [formProtectionGuard],
        component: User,
      },
    ],
  },

  {
    path: '',
    component: Homepage,
  },
  {
    path: 'forbidden',
    component: Forbidden,
  },
  {
    path: '**',
    component: Notfound,
  },
];
