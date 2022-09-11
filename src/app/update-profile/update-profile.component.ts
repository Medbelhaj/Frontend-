import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UtilisateurService } from '../services/utilisateur.service';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  banner: any = {

    pagetitle: 'Modifier profil',
    bg_image: 'assets/images/banner/bnr5.jpg',
    title: 'Modifier profil',
  };
  id: number;
  user: User;


  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private UtilisateurService: UtilisateurService ,private token: TokenStorageService,
    private router: Router
) { }


  ngOnInit() {
    this.user = new User();
    console.log(this.user);
    this.id = this.route.snapshot.params['ide'];
    
    this.UtilisateurService.getutilisateurId(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
        console.log(this.user);
      }, error => console.log(error)); 
  }
  updateEmployee() {
    this.UtilisateurService.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/teachers-profile']);
  }
     


}