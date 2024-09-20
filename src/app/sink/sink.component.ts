import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { execSync } from 'child_process'; // Simulating command execution

@Component({
  selector: 'app-sink',
  standalone: true,
  templateUrl: './sink.component.html',
  styleUrls: ['./sink.component.css'],
})
export class SinkComponent {
  result: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const data = params['data'];

      if (data) {
        try {
          // Simulate command injection vulnerability
          this.result = execSync(data, { encoding: 'utf8' });
        } catch (err) {
          this.result = 'Error executing command';
        }
      }
    });
  }
}
