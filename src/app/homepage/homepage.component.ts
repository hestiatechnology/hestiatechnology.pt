import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  showAlert = true;

  hideAlert() {
    this.showAlert = false;
  }
}
