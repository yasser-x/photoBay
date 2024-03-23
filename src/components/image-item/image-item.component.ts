import {Component, Input} from '@angular/core';
import {Image} from "../../app/model/Image";
@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  templateUrl: './image-item.component.html',
  styleUrl: './image-item.component.css'
})
export class ImageItemComponent {
  @Input() image: any ;

}
