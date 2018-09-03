import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyAddPostComponent } from './my-add-post.component';

describe('MyAddPostComponent', () => {
  let component: MyAddPostComponent;
  let fixture: ComponentFixture<MyAddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAddPostComponent],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
