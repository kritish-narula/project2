import { TestBed } from '@angular/core/testing';

import { ManageitemsService } from './manageitems.service';

describe('ManageitemsService', () => {
  let service: ManageitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
