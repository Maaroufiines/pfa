import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackadminRoutingModule } from './backadmin-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../_shared/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavaBarComponentComponent } from './nava-bar-component/nava-bar-component.component';
import { RegisterComponent } from './register/register.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { TableDataComponent } from './table-data/table-data.component';
import { LayoutComponent } from './layout/layout.component';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SideBarEtudiantComponent } from './side-bar-etudiant/side-bar-etudiant.component';
import { ProfileComponent } from './profile/profile.component';
import { ConcoursComponent } from './concours/concours.component';
import { CondidaConcoursComponent } from './condida-concours/condida-concours.component';
import { ListUserComponent } from './list-user/list-user.component';
import { TableUserComponent } from './table-user/table-user.component';
import { ScoreComponent } from './score/score.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    FooterComponent,
    NavaBarComponentComponent,
    RegisterComponent,
    SideBarComponentComponent,
    TableDataComponent,
    LayoutComponent,
    SideBarEtudiantComponent,
    ProfileComponent,
    ConcoursComponent,
    CondidaConcoursComponent,
    ListUserComponent,
    TableUserComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DynamicDialogModule,
    BackadminRoutingModule,
    FormsModule,
    DialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [LoginComponent]
})
export class BackadminModule { }
