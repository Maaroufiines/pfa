import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConcoursService } from 'src/app/services/concours.service';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {
  id : any
  consours : any
  constructor(private route : ActivatedRoute , private concoursService : ConcoursService) { 
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getCon()
  }

  getCon(){
    this.concoursService.getConcourById(this.id).subscribe(res=>{
      console.log(res)
      this.consours = res
    })
  }

}
