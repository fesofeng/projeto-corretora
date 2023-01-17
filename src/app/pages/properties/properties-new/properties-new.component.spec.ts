import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesNewComponent } from './properties-new.component';

describe('PropertiesNewComponent', () => {
  let component: PropertiesNewComponent;
  let fixture: ComponentFixture<PropertiesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
