import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhettyImagesComponent } from './ghetty-images.component';

describe('GhettyImagesComponent', () => {
  let component: GhettyImagesComponent;
  let fixture: ComponentFixture<GhettyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhettyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhettyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
