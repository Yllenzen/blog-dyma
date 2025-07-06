import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { UsersService } from './users.service';
import { signal } from '@angular/core';

describe('App', () => {
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UsersService', ['usersResource']);
    spy.usersResource = {
      value: signal([{ name: 'Louis' }]),
    };

    await TestBed.configureTestingModule({
      providers: [{ provide: UsersService, useValue: spy }],
      imports: [App],
    }).compileComponents();

    TestBed.inject(UsersService);
  });

  it('should contain h1 with salut', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(h1).toBeDefined();
  });

  it('should display users in template', async () => {
    const fixture = TestBed.createComponent(App);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const users = component.users();
    expect(users).toEqual([{ name: 'Louis' }]);

    const li = fixture.nativeElement.querySelector('li');
    expect(li).toBeDefined();
    expect(li.textContent).toBe('Louis');
  });
});
