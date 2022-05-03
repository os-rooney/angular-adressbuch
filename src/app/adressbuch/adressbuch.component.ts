import {Component, Input, OnInit} from '@angular/core';
import {Adressbuch} from "../adressbuch";

@Component({
  selector: 'app-adressbuch',
  templateUrl: './adressbuch.component.html',
  styleUrls: ['./adressbuch.component.css']
})
export class AdressbuchComponent implements OnInit {

  @Input()
  adressbuch?: Adressbuch;

  constructor() { }

  ngOnInit(): void {
  }

}
