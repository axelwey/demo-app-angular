import { Component } from '@angular/core';
import { Component2 } from '../component2/component2';
@Component({
  selector: 'app-component1',
  standalone:true,
  imports: [Component2],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {
kleur_type="blue";
tekst_type="parent"
verander_kleur(){
  this.kleur_type="green";
}
}
