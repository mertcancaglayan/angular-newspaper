import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-lg-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './lg-card.component.html',
  styleUrl: './lg-card.component.css'
})
export class LgCardComponent {

}
