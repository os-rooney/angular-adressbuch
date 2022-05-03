import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressbuchFormComponent } from './adressbuch-form.component';

describe('AdressbuchFormComponent', () => {
  let component: AdressbuchFormComponent;
  let fixture: ComponentFixture<AdressbuchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressbuchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressbuchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
