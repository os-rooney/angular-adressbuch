import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressbuchComponent } from './adressbuch.component';

describe('AdressbuchComponent', () => {
  let component: AdressbuchComponent;
  let fixture: ComponentFixture<AdressbuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressbuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
