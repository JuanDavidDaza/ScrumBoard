import { TestBed } from '@angular/core/testing';

import { TokenIntService } from './token-int.service';

describe('TokenIntService', () => {
  let service: TokenIntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
