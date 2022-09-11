import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.css']
})
export class TeachersProfileComponent implements OnInit {
roleUser = "TC"
ide:number;
banner : any = {
		
		pagetitle: "Teachers Profile",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Teachers Profile",
	}
	currentUser: any;
  constructor(private storageService: StorageService, private router: Router) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.storageService.getUser().id);
    this.ide = this.storageService.getUser().id;
  }
  userDetails(ide: number){
    this.router.navigate(['update-profil', this.ide]);
  }
}