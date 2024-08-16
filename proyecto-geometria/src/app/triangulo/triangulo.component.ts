import { Component} from '@angular/core';
import { TrianguloEscaleno } from '../modelos/triangulo-escaleno';
import { IonCard, IonInput, IonCardTitle, IonCardHeader, IonCardContent, 
  IonItem, IonLabel, IonButton, IonText, IonImg, IonCardSubtitle }  from "@ionic/angular/standalone";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports:[IonCard,IonInput,IonCardTitle,IonCardHeader,IonCardContent,
    IonItem, IonLabel, IonButton, IonText, FormsModule, IonImg, IonCardSubtitle, CommonModule]
})
export class TrianguloComponent {
  ladoA:number = 0;
  ladoB:number = 0;
  ladoC:number = 0;
  resultado:number | null= null;

  CalcularPerimetro(){
    const triangulo = new TrianguloEscaleno(this.ladoA,this.ladoB,this.ladoC);
    this.resultado = parseFloat(triangulo.calcularPerimetro().toFixed(2));
  }
}
