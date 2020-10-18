import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocolioComponent } from './cocolio.component';

describe('CocolioComponent', () => {
  let component: CocolioComponent;
  let fixture: ComponentFixture<CocolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
