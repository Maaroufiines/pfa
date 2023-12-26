import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE, WebStorageService } from "ngx-webstorage-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Concours Pro';
  lang:any = localStorage.getItem('lang') 
  constructor(private translate: TranslateService , @Inject(LOCAL_STORAGE) private storage: WebStorageService,){
  
  }
 
}
