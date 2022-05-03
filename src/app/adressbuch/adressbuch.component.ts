import {Component, Input, OnInit} from '@angular/core';
import {addressBook} from "../adressbuch";

@Component({
  selector: 'app-adressbuch',
  templateUrl: './adressbuch.component.html',
  styleUrls: ['./adressbuch.component.css']
})
export class AdressbuchComponent implements OnInit {

  @Input()
  addressBook?: addressBook;

  constructor() { }

  ngOnInit(): void {
  }

}
