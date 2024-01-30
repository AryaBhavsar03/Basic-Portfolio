import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = 'Arya Bhavsar';
  imageUrl = 'assets/profile.jpg';
  taglinePrefix = 'Future made with';
  taglineSuffix = 'passion.';
}
