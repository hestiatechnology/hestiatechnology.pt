import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent implements OnInit {
  //showAlert = true;
  //
  //hideAlert() {
  //  this.showAlert = false;
  //}

  ngOnInit(): void {

    const contactForm = document.getElementById('contactform')
    console.log(contactForm)
    if (!contactForm) return
    createWidget('ytY4mJiA', { container: contactForm })
  }
}
