import { Component, Input } from '@angular/core';
import { iPostDati } from '../../models/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() postCard: iPostDati | null = null;
}
