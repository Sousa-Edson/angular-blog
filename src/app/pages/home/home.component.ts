import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MOCK } from '../../data/mock'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dados = MOCK;
  itemComId1 = this.dados.find(item => item.id === '1');
}
