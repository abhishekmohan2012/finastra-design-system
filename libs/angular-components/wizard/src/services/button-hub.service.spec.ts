import { TestBed } from '@angular/core/testing';

import { ButtonHubService } from './button-hub.service';

describe('ButtonHubService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ButtonHubService]
    })
  );

  it('should be created', () => {
    const service: ButtonHubService = TestBed.get(ButtonHubService);
    expect(service).toBeTruthy();
  });
});