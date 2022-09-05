import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ParentService} from 'src/app/services/parent.service';
import { Parent } from 'src/app/model/parent.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  parent: Parent = new Parent();
  submitted = false;


banner : any = {
		
		pagetitle: "Register",
		bg_image: "assets/images/banner/bnr5.jpg",
		title: "Register",
	}
  constructor(private parentService: ParentService,
    private router: Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.parent = new Parent();

  }


 save(){
  this.parentService
  .creatparent(this.parent).subscribe( data => {
    console.log(data)
    this.parent = new Parent ();
    this.gotoList();
  },

 error => console.log(error));

}
 onsubmitted(){
  this.submitted = true;
  this.save();
 }
gotoList(){
  this.router.navigate(['/parents'])
 }
    
}
  