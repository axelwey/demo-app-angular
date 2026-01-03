import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.css',
})
export class Component2 {
@Input() kleur:string='red'
@Input() tekst:string='default tekst'
}
