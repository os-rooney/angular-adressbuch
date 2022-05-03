import {Component, OnInit} from '@angular/core';
import {Adressbuch} from "./adressbuch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Adressbuch';

  adressbuch?: Adressbuch[];

  public ngOnInit() {
  }

}
