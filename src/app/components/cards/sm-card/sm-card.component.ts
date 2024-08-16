import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-sm-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './sm-card.component.html',
  styleUrl: './sm-card.component.css'
})
export class SmCardComponent {

}
