import { Component} from '@angular/core';
import { Circulo } from '../modelos/circulo';
import { IonCard, IonCardContent, IonCardHeader, IonHeader, IonCardTitle,
  IonLabel,IonItem,IonInput, IonButton, IonText, IonCardSubtitle, 
  IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports:[IonCard,IonInput,IonCardTitle,IonCardHeader,IonCardContent,
    IonItem, IonLabel, IonButton, IonText, FormsModule, IonCardSubtitle, CommonModule,IonImg]
})
export class CirculoComponent {
  radio: number = 0;
  resultado: number | null = null;

  CalcularPerimetro(){
    const circulo = new Circulo(this.radio);
    this.resultado = parseFloat(circulo.calcularPerimetro().toFixed(2));
  }
}
