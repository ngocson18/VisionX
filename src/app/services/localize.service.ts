import { Injectable } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {

  constructor(private i18n: NzI18nService) { }

  switchLanguage() {
    this.i18n.setLocale(en_US);
  }
}
