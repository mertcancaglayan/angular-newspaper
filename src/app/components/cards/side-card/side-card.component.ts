import { Component } from '@angular/core';
import { PostMetaComponent } from "../post-meta/post-meta.component";

@Component({
  selector: 'app-side-card',
  standalone: true,
  imports: [PostMetaComponent],
  templateUrl: './side-card.component.html',
  styleUrl: './side-card.component.css'
})
export class SideCardComponent {

}
