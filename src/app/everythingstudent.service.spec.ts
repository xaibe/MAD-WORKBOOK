import { TestBed } from '@angular/core/testing';

import { EverythingstudentService } from './everythingstudent.service';

describe('EverythingstudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverythingstudentService = TestBed.get(EverythingstudentService);
    expect(service).toBeTruthy();
  });
});
