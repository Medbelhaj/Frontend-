import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUniversityComponent } from './home-university/home-university.component';


import { HeaderStyle3Component } from './features/header-style3/header-style3.component';
import { FooterStyle1Component } from './features/footer-style1/footer-style1.component';
import { FooterStyle2Component } from './features/footer-style2/footer-style2.component';
import { FooterStyle3Component } from './features/footer-style3/footer-style3.component';
import { FooterStyle4Component } from './features/footer-style4/footer-style4.component';
import { FooterStyle5Component } from './features/footer-style5/footer-style5.component';
import { FooterStyle6Component } from './features/footer-style6/footer-style6.component';
import { FooterStyle7Component } from './features/footer-style7/footer-style7.component';
import { FooterStyle8Component } from './features/footer-style8/footer-style8.component';
import { FooterStyle9Component } from './features/footer-style9/footer-style9.component';
import { FooterStyle10Component } from './features/footer-style10/footer-style10.component';
import { FooterStyle11Component } from './features/footer-style11/footer-style11.component';
import { FooterStyle12Component } from './features/footer-style12/footer-style12.component';

import { AboutUs2Component } from './pages/about-us2/about-us2.component';
import { Services1Component } from './pages/services1/services1.component';
import { Services2Component } from './pages/services2/services2.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TeachersProfileComponent } from './pages/teachers-profile/teachers-profile.component';
import { CourcesComponent } from './pages/cources/cources.component';
import { CourcesDetailsComponent } from './pages/cources-details/cources-details.component';
import { EventsComponent } from './pages/events/events.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { HelpDeskComponent } from './pages/help-desk/help-desk.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error405Component } from './pages/error405/error405.component';
import { GalleryGrid2Component } from './pages/gallery-grid2/gallery-grid2.component';
import { GalleryGrid3Component } from './pages/gallery-grid3/gallery-grid3.component';
import { GalleryGrid4Component } from './pages/gallery-grid4/gallery-grid4.component';
// import { ComingSoon1Component } from './pages/coming-soon1/coming-soon1.component';
// import { ComingSoon2Component } from './pages/coming-soon2/coming-soon2.component';

import { LoginComponent } from './shop/login/login.component';
import { RegisterComponent } from './shop/register/register.component';

import { HalfImageComponent } from './blog/half-image/half-image.component';
import { HalfImageSidebarComponent } from './blog/half-image-sidebar/half-image-sidebar.component';
import { HalfImageSidebarLeftComponent } from './blog/half-image-sidebar-left/half-image-sidebar-left.component';
import { LargeImageComponent } from './blog/large-image/large-image.component';
import { LargeImageSidebarComponent } from './blog/large-image-sidebar/large-image-sidebar.component';
import { LargeImageSidebarLeftComponent } from './blog/large-image-sidebar-left/large-image-sidebar-left.component';
import { Grid2Component } from './blog/grid2/grid2.component';
import { Grid2SidebarComponent } from './blog/grid2-sidebar/grid2-sidebar.component';
import { Grid2SidebarLeftComponent } from './blog/grid2-sidebar-left/grid2-sidebar-left.component';
import { Grid3Component } from './blog/grid3/grid3.component';
import { Grid3SidebarComponent } from './blog/grid3-sidebar/grid3-sidebar.component';
import { Grid3SidebarLeftComponent } from './blog/grid3-sidebar-left/grid3-sidebar-left.component';
import { Grid4Component } from './blog/grid4/grid4.component';
import { SingleComponent } from './blog/single/single.component';
import { SingleSidebarComponent } from './blog/single-sidebar/single-sidebar.component';
import { SingleSidebarLeftComponent } from './blog/single-sidebar-left/single-sidebar-left.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component'
import { ContactUs3Component } from './pages/contact-us3/contact-us3.component';
import { ParentProfileComponent } from './pages/parent-profile/parent-profile.component';
import { ChoiceRoleComponent } from './pages/choice-role/choice-role.component';



const routes: Routes = [
	{path: '', component: ChoiceRoleComponent},
	{path: 'index', component: HomeUniversityComponent},
	{path: 'home-university', component: HomeUniversityComponent},

	{path: 'header-style-3', component: HeaderStyle3Component},
	{path: 'footer-1', component: FooterStyle1Component},
	{path: 'footer-2', component: FooterStyle2Component},
	{path: 'footer-3', component: FooterStyle3Component},
	{path: 'footer-4', component: FooterStyle4Component},
	{path: 'footer-5', component: FooterStyle5Component},
	{path: 'footer-6', component: FooterStyle6Component},
	{path: 'footer-7', component: FooterStyle7Component},
	{path: 'footer-8', component: FooterStyle8Component},
	{path: 'footer-9', component: FooterStyle9Component},
	{path: 'footer-10', component: FooterStyle10Component},
	{path: 'footer-11', component: FooterStyle11Component},
	{path: 'footer-12', component: FooterStyle12Component},
	
	{path: 'about-2', component: AboutUs2Component},
	{path: 'about-2', component: AboutUs2Component},
	{path: 'services-1', component: Services1Component},
	{path: 'services-2', component: Services2Component},
	{path: 'faq-1', component: FaqsComponent},
	{path: 'teacher', component: TeachersComponent},
	{path: 'teachers-profile', component: TeachersProfileComponent},
	{path: 'parent-profile', component: ParentProfileComponent},
	{path: 'courses', component: CourcesComponent},
	{path: 'courses-details', component: CourcesDetailsComponent},
	{path: 'event', component: EventsComponent},
	{path: 'event-details', component: EventsDetailsComponent},
	{path: 'help-desk', component: HelpDeskComponent},
	{path: 'privacy-policy', component: PrivacyPolicyComponent},
	{path: 'error-404', component: Error404Component},
	{path: 'error-405', component: Error405Component},
	{path: 'gallery-grid-2', component: GalleryGrid2Component},
	{path: 'gallery-grid-3', component: GalleryGrid3Component},
	{path: 'gallery-grid-4', component: GalleryGrid4Component},
	

	{path: 'shop-login', component: LoginComponent},
	{path: 'shop-register', component: RegisterComponent},
	
	{path: 'blog-half-img', component: HalfImageComponent},
	{path: 'blog-half-img-sidebar', component: HalfImageSidebarComponent},
	{path: 'blog-half-img-left-sidebar', component: HalfImageSidebarLeftComponent},
	{path: 'blog-large-img', component: LargeImageComponent},
	{path: 'blog-large-img-sidebar', component: LargeImageSidebarComponent},
	{path: 'blog-large-img-left-sidebar', component: LargeImageSidebarLeftComponent},
	{path: 'blog-grid-2', component: Grid2Component},
	{path: 'blog-grid-2-sidebar', component: Grid2SidebarComponent},
	{path: 'blog-grid-2-sidebar-left', component: Grid2SidebarLeftComponent},
	{path: 'blog-grid-3', component: Grid3Component},
	{path: 'blog-grid-3-sidebar', component: Grid3SidebarComponent},
	{path: 'blog-grid-3-sidebar-left', component: Grid3SidebarLeftComponent},
	{path: 'blog-grid-4', component: Grid4Component},
	{path: 'blog-single', component: SingleComponent},
	{path: 'blog-single-sidebar', component: SingleSidebarComponent},
	{path: 'blog-single-left-sidebar', component: SingleSidebarLeftComponent},
	{path: 'update-profil/:ide', component: UpdateProfileComponent},

	{path: 'contact-3', component: ContactUs3Component},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
