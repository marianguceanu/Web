import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLookupComponent } from './user-lookup.component';

describe('UserLookupComponent', () => {
  let component: UserLookupComponent;
  let fixture: ComponentFixture<UserLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLookupComponent],
    });
    fixture = TestBed.createComponent(UserLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
