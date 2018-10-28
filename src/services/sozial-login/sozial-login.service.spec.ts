import { TestBed } from '@angular/core/testing';

import { SozialLoginService } from './sozial-login.service';

describe('SozialLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SozialLoginService = TestBed.get(SozialLoginService);
    expect(service).toBeTruthy();
  });
});
