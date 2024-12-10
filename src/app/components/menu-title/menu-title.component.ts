import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
