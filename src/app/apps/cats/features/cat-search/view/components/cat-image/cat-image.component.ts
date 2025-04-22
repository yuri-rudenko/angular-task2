import { Component, Input } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cat-image',
  templateUrl: './cat-image.component.html',
  imports: [
    MatProgressSpinnerModule
  ],
  styleUrls: ['./cat-image.component.css']
})
export class CatImageComponent {
  @Input() src!: string;
  imageLoaded = false;

  onLoad() {
    this.imageLoaded = true;
  }
}
