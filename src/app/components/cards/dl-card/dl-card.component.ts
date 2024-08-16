import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-dl-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './dl-card.component.html',
  styleUrl: './dl-card.component.css'
})
export class DlCardComponent {

}
