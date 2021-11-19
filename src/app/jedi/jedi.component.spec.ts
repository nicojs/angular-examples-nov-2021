import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { JediComponent } from './jedi.component';
import { BACKEND_URL } from '../tokens';
import { Jedi } from '../model/jedi';
import { JediService } from '../services/jedi.service';

describe('JediComponent', () => {
  let component: JediComponent;
  let sut: ComponentFixture<JediComponent>;
  let http: HttpTestingController;

  describe('integration test with http', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [JediComponent],
        imports: [HttpClientTestingModule],
        providers: [{ provide: BACKEND_URL, useValue: 'http://testing.org' }],
      }).compileComponents();
      sut = TestBed.createComponent(JediComponent);
      component = sut.componentInstance;
      sut.detectChanges();

      http = TestBed.inject(HttpTestingController);
    });

    it('should retrieve jedis and provide to jedi-list', async () => {
      const request = http.expectOne('http://testing.org/jedis');
      const mockJedis: Jedi[] = [{ name: 'foo', midichlorian: 20 }];
      request.flush(mockJedis);
      sut.detectChanges();
      await sut.whenStable();

      // Assert
      expect(component.allJedis).toEqual(mockJedis);
    });
  });

  describe('integration test without http', () => {
    let jediServiceMock: jasmine.SpyObj<JediService>;
    const mockJedis: Jedi[] = [{ name: 'foo', midichlorian: 20 }];

    beforeEach(async () => {
      jediServiceMock = jasmine.createSpyObj('jedi-service', [
        'getJedis',
        'addJedi',
      ]);
      jediServiceMock.getJedis.and.returnValue(Promise.resolve(mockJedis))

      await TestBed.configureTestingModule({
        declarations: [JediComponent],
        providers: [{ provide: JediService, useValue: jediServiceMock }],
      }).compileComponents();
      sut = TestBed.createComponent(JediComponent);
      component = sut.componentInstance;
      sut.detectChanges();
    });

    it('should retrieve jedis and provide to jedi-list', async () => {
      sut.detectChanges();
      await sut.whenStable();

      // Assert
      expect(component.allJedis).toEqual(mockJedis);
      expect(jediServiceMock.getJedis).toHaveBeenCalled();
    });
  });
});
