import { Component, OnInit } from '@angular/core';
import { translateSubject } from 'src/app/services/translate.service';
import { TranslateService } from '@ngx-translate/core';
import { ConcoursService } from 'src/app/services/concours.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-concours',
  templateUrl: './concours.component.html',
  styleUrls: ['./concours.component.css']
})
export class ConcoursComponent implements OnInit {

  constructor(private translateSubject : translateSubject ,private translate: TranslateService , private concoursService :  ConcoursService) { }
  myData : any
  concours : any = {}
  ngOnInit(): void {
    this.translateSubject.myData$.subscribe(newData => {
      this.myData = newData;
      console.log(this.myData)
    });
  }

  add(){
    console.log(this.concours);
    this.concoursService.addConcours(this.concours).subscribe(res=>{
      console.log(res)
      Swal.fire(
        '',
        '',
        'success'
      ).then(()=>{
        this.concours = {}
      })
    })
    
  }

}
