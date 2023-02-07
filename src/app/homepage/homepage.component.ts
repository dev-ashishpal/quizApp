import { Component } from '@angular/core';
import { quiz } from '../data/external';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  inviteCode = '';

  constructor(private router: Router, private toastr: ToastrService) {}

  onSubmit = () => {
    if (this.inviteCode in quiz) {
      this.router.navigate(['/instructions']);
    } else {
      this.toastr.error(
        'The invitation code that you entered does not exist.',
        'Invalid Code',
        {
          timeOut: 2000,
        }
      );
    }
  };
}
