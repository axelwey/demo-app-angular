import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1 } from './component1/component1';
type Naam={
  id:number;
  naam:string;
}
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Component1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('demo-app');
  namen:Naam[]=[
    {id:1,naam:"naam"},
    {id:2,naam:"axl"},
    {id:3,naam:"wers"}
  ]
}
