import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtonsComponent } from './link-buttons.component';

describe('LinkButtonsComponent', () => {
  let component: LinkButtonsComponent;
  let fixture: ComponentFixture<LinkButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
