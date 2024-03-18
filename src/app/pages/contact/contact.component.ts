import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name: string = "";
  email: string = "";
  messages: Array<any> = [];
  isSubmitted: boolean = false;

  onSubmit() {
    this.messages.push(
      {
        'name' : this.name,
        'email':this.email
      }
    )
console.log(this.messages)
  }

}
