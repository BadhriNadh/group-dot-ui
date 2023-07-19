import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitecardComponent } from './invitecard.component';

describe('InvitecardComponent', () => {
  let component: InvitecardComponent;
  let fixture: ComponentFixture<InvitecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitecardComponent]
    });
    fixture = TestBed.createComponent(InvitecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
