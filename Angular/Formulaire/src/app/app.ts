import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function notPaul(control: AbstractControl): { [s: string]: boolean } | null {
  const value = control.value;
  if (value === 'paul') {
    return {
      paul: true,
    };
  } else {
    return null;
  }
}

// async function fiftypercent(
//   control: AbstractControl
// ): Promise<{ [s: string]: boolean } | null> {
//   const promise = new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve({
//         fiftypercent: true,
//       });
//     }, 50000);
//   });
//   return promise;
// }

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  styles: `
  :host {
    display: flex; 
    width: 100%; 
    max-width: 900px; 
    margin: auto; 
    padding: 24px; 
    gap: 24px;
  }
  `,
  template: `
    <form [formGroup]="userForm" (submit)="submit()" class="w-half">
      <div class="flex flex-col mb-10">
        <label for="lastname">Nom</label>
        <input formControlName="lastname" type="text" id="lastname" />
        @let lastname = userForm.get('lastname')!; @if
        (lastname.errors?.['required'] && lastname.touched) {
        <p class="error">Le champ est obligatoire</p>
        } @else if (lastname.errors?.['minlenght']) {
        <p class="error">Le nom est trop court</p>
        }
      </div>
      <div class="flex flex-col mb-10">
        <label for="firstname">Prénom</label>
        <input formControlName="firstname" type="text" id="firstname" />
        @let firstnameError = userForm.get('firstname')?.errors; @if
        (firstnameError?.['paul']) {
        <p class="error">Le site n'est pas accessible pour les Pauls</p>
        } @else if (firstnameError?.['fiftypercent']) {
        <p class="error">Pas de chance</p>
        <!--@if (userForm.get('firstname')?.status === 'PENDING') {
        <p>Chargement ...</p>
        } -->
        }
      </div>
      <div formGroupName="local">
        <div class="flex flex-col mb-10">
          <label for="email">Email</label>
          <input formControlName="email" type="text" id="email" />
          @let email = userForm.get('local')!.get('email')!; @if
          (email.errors?.['email']) {
          <p class="error">Il faut un email valide</p>
          }
        </div>
        <div class="flex flex-col mb-10">
          <label for="password">Mot de passe</label>
          <input formControlName="password" type="password" id="password" />
        </div>
      </div>
      <div formArrayName="hobbies" class="flex flex-col mb-20">
        <label>Hobbies</label>
        <button (click)="addHobby()" class="btn btn-primary mb-10">
          Ajouter un hobby
        </button>
        @for (hobby of hobbies.controls; track $index) {
        <div [formGroupName]="$index" class="flex flex-row gap-16 mb-10">
          <input class="flex-auto" type="text" formControlName="name" />
          <select formControlName="skill">
            <option value="noob">Débutant</option>
            <option value="average">Intermédiaire</option>
            <option value="pro">PRo</option>
          </select>
          <button class="btn" (click)="deleteHobby($index)">Supprimer</button>
        </div>
        }
      </div>
      <button class="btn btn-primary mb-20">Sauvegarder</button>
    </form>
    <pre class="w-half">{{ userForm.value | json }}</pre>
  `,
})
export class App {
  fb = inject(FormBuilder);

  userForm = this.fb.group({
    lastname: [''],
    firstname: [''],
    email: [''],
    password: [''],
    hobbies: this.fb.array([]),
  });

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(
      this.fb.group({
        name: [''],
        skill: [''],
      })
    );
  }

  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log(this.userForm);
  }
}
