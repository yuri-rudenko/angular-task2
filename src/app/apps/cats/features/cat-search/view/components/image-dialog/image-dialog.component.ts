import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  imports: [],
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.css'
})
export class ImageDialogComponent {

  readonly dialogRef = inject(MatDialogRef<ImageDialogComponent>);
  readonly data = inject<{src: string}>(MAT_DIALOG_DATA);

  readonly src = this.data.src;

}
