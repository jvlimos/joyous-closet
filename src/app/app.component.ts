import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joyous-closet';

	menuDataSource: any;

	galleryDataSource: any;

	constructor() {
		this.menuDataSource = [{title: 'Home'}, {title: 'Shop'}, {title: 'About Us'}, {title: 'Shop Policy'}, {title: 'FAQs'}, {title: 'Contact Us'}];

		this.galleryDataSource = [
			"../assets/imgs_joyousc/cindy-c-q7ZN1xxtniM-unsplash.jpg",
			"../assets/imgs_joyousc/371930583_18384061399018984_7121901672453856909_n.jpg",
			"../assets/imgs_joyousc/mike-von-TPUGbQmyVwE-unsplash.jpg",
			"../assets/imgs_joyousc/susan-wilkinson-zp6wHVSm-0c-unsplash.jpg",
			"../assets/imgs_joyousc/becca-mchaffie-Fzde_6ITjkw-unsplash.jpg",
			"../assets/imgs_joyousc/artem-beliaikin-UdQt3FT6rxM-unsplash.jpg",
			"../assets/imgs_joyousc/dushawn-jovic-OxbsGvWUwqs-unsplash.jpg",
			"../assets/imgs_joyousc/ehimetalor-akhere-unuabona-fGATCEsRp0Q-unsplash.jpg",

		];
	}
}
