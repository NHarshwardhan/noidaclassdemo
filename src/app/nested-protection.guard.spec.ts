import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { nestedProtectionGuard } from './nested-protection.guard';

describe('nestedProtectionGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nestedProtectionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
