import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-source',
  standalone: true,
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  imports: [FormsModule]  // Add FormsModule here for ngModel support
})
export class SourceComponent {
  inputValue: string = '';

  constructor(private router: Router) {}

  sendData() {
    // Send the input data to the Sink component through query parameters
    this.router.navigate(['/sink'], { queryParams: { data: this.inputValue } });
  }
}
