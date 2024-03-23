import {Component, OnInit} from '@angular/core';
import {Image} from "../../app/model/Image";
import {ImageService} from "../../app/ImageService";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images:any=[] ;
  searchQuery : string='' ;
  constructor(private imageService:ImageService) {
  }


  searchImages() {
    if (this.searchQuery.trim() !== '') {
      this.imageService.getImages(this.searchQuery).subscribe(
        (data: any) => {
          this.images = data.hits; // Assuming the returned data has an array of images under 'hits'
          console.log(data)
        },
        error => {
          console.error('Error fetching images:', error);
        }
      );
    }
  }

}
