import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
   IonLabel, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonContent,
    IonSelectOption,IonSelect, CirculoComponent, TrianguloComponent, CommonModule, FormsModule
  ],
})
export class HomePage {
  figuraSeleccionada : string ='';
  selectedShape: string = '';

  constructor() {}
}
