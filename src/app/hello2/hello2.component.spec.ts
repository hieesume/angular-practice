import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello2Component } from './hello2.component';

describe('Hello2Component', () => {
  let component: Hello2Component;
  let fixture: ComponentFixture<Hello2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Hello2Component]
    });
    fixture = TestBed.createComponent(Hello2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
