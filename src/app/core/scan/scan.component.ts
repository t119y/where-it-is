import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('scan com');
  }
  uploaderImage(event): void {
    console.log(event.target.files[0]);
  }
}
