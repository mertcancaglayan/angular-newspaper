import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-md-h-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './md-h-card.component.html',
  styleUrl: './md-h-card.component.css'
})
export class MdHCardComponent {

}
