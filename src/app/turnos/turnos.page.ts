import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Animation, AnimationController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.page.html',
  styleUrls: ['./turnos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TurnosPage implements OnInit {

  selectedTreatment: string = '';

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();


    return utcDay !== 0 && utcDay !== 6;
  };

  constructor(private animationCtrl : AnimationController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const saveBtn: HTMLElement | null = document.getElementById('saveBtn'); // Especificar el tipo como HTMLElement | null
    if (saveBtn !== null) {
      // Verificar si no es nulo
      const animTitle: Animation = this.animationCtrl
        .create()
        .addElement(saveBtn)
        .duration(3000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'scale(1.05)' },
          { offset: 0.5, transform: 'scale(1.15)' },
          { offset: 1, transform: 'scale(1.05)' },
        ]);
      animTitle.play();
    }
  }
}
