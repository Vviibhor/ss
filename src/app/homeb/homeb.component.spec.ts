import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebComponent } from './homeb.component';

describe('HomebComponent', () => {
  let component: HomebComponent;
  let fixture: ComponentFixture<HomebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
