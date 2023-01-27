import { TestBed } from '@angular/core/testing';

import { WlcGuard } from './wlc-guard.guard';

describe('WlcGuardGuard', () => {
  let guard: WlcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WlcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
