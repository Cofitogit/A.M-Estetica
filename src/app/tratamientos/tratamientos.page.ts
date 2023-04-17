import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Animation, AnimationController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TratamientosPage implements OnInit {
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    const options: HTMLElement | null = document.getElementById('options'); // Especificar el tipo como HTMLElement | null
    if (options !== null) {
      // Verificar si no es nulo
      const animTitle: Animation = this.animationCtrl
        .create()
        .addElement(options)
        .duration(20000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, marginInline: '' },
          { offset: 0.5, backgroundSize: '50px 50px' },
          { offset: 1, backgroundSize: '25px 25px' },
        ]);
      animTitle.play();
    }
  }

  ionViewWillEnter() {
    const animation: HTMLElement | null =
      document.getElementById('tratamientosHome'); // Especificar el tipo como HTMLElement | null
    if (animation !== null) {
      // Verificar si no es nulo
      const animTitle: Animation = this.animationCtrl
        .create()
        .addElement(animation)
        .duration(20000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, backgroundSize: '25px 25px' },
          { offset: 0.5, backgroundSize: '50px 50px' },
          { offset: 1, backgroundSize: '25px 25px' },
        ]);
      animTitle.play();
    }

    const tratamientosContainer: HTMLElement | null =
    document.getElementById('tratamientosContainer'); // Especificar el tipo como HTMLElement | null
  if (tratamientosContainer !== null) {
    // Verificar si no es nulo
    const animTitle: Animation = this.animationCtrl
      .create()
      .addElement(tratamientosContainer)
      .duration(300)
      .fromTo("transform", "scale(0)", "scale(1)")
    animTitle.play();
  }
  }
}
