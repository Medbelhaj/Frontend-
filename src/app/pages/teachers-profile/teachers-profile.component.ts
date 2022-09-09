import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.css']
})
export class TeachersProfileComponent implements OnInit {
roleUser = "TC"
banner : any = {
		
		pagetitle: "Teachers Profile",
		bg_image: "assets/images/banner/bnr4.jpg",
		title: "Teachers Profile",
	}
	currentUser: any;
  constructor(private storageService: StorageService) { }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}