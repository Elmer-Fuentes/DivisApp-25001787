import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonInput,
  IonButton, IonCard, IonCardContent, IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonCard, IonCardContent, IonItem]
})
export class HomePage {
  quetzales: number | string | null = 25001787;
  dolares: number | null = null;
  cantidadConvertida: number | null = null;
  error = '';
  readonly cambio = 8;

  constructor() {
    this.convertir();
  }

  convertir(): void {
    this.error = '';
    this.dolares = null;
    this.cantidadConvertida = null;
    if (this.quetzales === null || String(this.quetzales).trim() === '') {
      this.error = 'Ingresa una cantidad en quetzales.';
      return;
    }
    const valor = Number(this.quetzales);
    if (!Number.isFinite(valor) || valor < 0) {
      this.error = 'Ingresa una cantidad válida mayor o igual a cero.';
      return;
    }
    this.cantidadConvertida = valor;
    this.dolares = valor / this.cambio;
  }

  actualizarCantidad(): void {
    if (this.quetzales === null || String(this.quetzales).trim() === '') {
      this.dolares = null;
      this.cantidadConvertida = null;
      this.error = '';
      return;
    }
    this.convertir();
  }

  limpiar(): void {
    this.quetzales = null;
    this.dolares = null;
    this.cantidadConvertida = null;
    this.error = '';
  }
}
