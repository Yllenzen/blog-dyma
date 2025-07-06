import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { Todo } from './todo';

describe('Todo', () => {
  let component: Todo;
  let fixture: ComponentFixture<Todo>;
  let componentRef: ComponentRef<Todo>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todo],
    }).compileComponents();

    fixture = TestBed.createComponent(Todo);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Salut', () => {
    componentRef.setInput('todoContent', 'Salut');
    fixture.detectChanges();
    const li = nativeElement.querySelector('li');
    expect(li?.textContent).toBe('Salut');
  });

  it('should emit Salut', () => {
    componentRef.setInput('todoContent', 'Salut');
    fixture.detectChanges();
    const li = nativeElement.querySelector('li');
    let emitValue: string | undefined;
    component.emitToggle.subscribe((v) => {
      emitValue = v;
    });
    li?.click();
    fixture.detectChanges();
    expect(emitValue).toBe('Salut');
  });
});
