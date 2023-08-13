import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  isHidden: boolean = false;

  toggleSidebar() {
    this.isHidden = !this.isHidden;
  }
}
