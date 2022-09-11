import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choice-role',
  templateUrl: './choice-role.component.html',
  styleUrls: ['./choice-role.component.css']
})
export class ChoiceRoleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goTo(){
    this.router.navigate(['shop-login']);
  }
}
