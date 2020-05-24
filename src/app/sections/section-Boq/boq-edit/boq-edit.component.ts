import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order-edit',
  templateUrl: './boq-edit.component.html',
  styleUrls: ['./boq-edit.component.scss']
})
export class BoqEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<BoqEditComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data.id)
  }

}
