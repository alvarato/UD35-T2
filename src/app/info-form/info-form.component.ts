import { Component, Input } from '@angular/core';
import { Form } from '../models/Form';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {
@Input() valor : Form | any;

}
