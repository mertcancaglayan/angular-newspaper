import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-md-v-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './md-v-card.component.html',
  styleUrl: './md-v-card.component.css'
})
export class MdVCardComponent {

}
