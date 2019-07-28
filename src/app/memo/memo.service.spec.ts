import { TestBed } from '@angular/core/testing';

import { MemoService } from './memo.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoService = TestBed.get(MemoService);
    expect(service).toBeTruthy();
  });
});
