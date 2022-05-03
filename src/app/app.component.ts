import {Component, OnInit} from '@angular/core';
import {addressBook} from "./adressbuch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Address Book';

  addressBook?: addressBook[];

  public ngOnInit() {
  }


}
