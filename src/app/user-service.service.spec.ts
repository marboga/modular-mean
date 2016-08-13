/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { UserServiceService } from './user-service.service';

describe('Service: UserService', () => {
  beforeEach(() => {
    addProviders([UserServiceService]);
  });

  it('should ...',
    inject([UserServiceService],
      (service: UserServiceService) => {
        expect(service).toBeTruthy();
      }));
});
