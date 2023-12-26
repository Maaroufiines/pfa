import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcoursService } from 'src/app/services/concours.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  concours:any
  listePar : any
  constructor(private concoursService : ConcoursService , private  router : Router) { }

  ngOnInit(): void {
    this.getAllConcours()
  }

  getAllConcours() {
    this.concoursService.getAllConcours().subscribe(res => {
      console.log(res)
      this.concours = res
    
    })
  }

  liste(c :any){
    var url ="liste/participant/"+c.id
    this.router.navigateByUrl(url)
  }

  delete(c : any){
    this.concoursService.deleteConcours(c.id).subscribe(res=>{
      console.log(res)
      this.getAllConcours()
    })
  }

}
