import {inject, TestBed} from "@angular/core/testing";

import {UserinfoService} from "./userinfo.service";

describe('UserinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinfoService]
    });
  });

  it('should ...', inject([UserinfoService], (service: UserinfoService) => {
    expect(service).toBeTruthy();
  }));
});
