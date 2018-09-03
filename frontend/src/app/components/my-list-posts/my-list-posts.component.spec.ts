/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyListPostsComponent } from './my-list-posts.component';

describe('MyComponentComponent', () => {
  let component: MyListPostsComponent;
  let fixture: ComponentFixture<MyListPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyListPostsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
