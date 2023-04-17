import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ConsejosService } from '../services/consejos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, CommonModule],
})
export class HomePage {
  consejos!: any[];
  consejoActual: any;
  interval: any;
  closeLogo: boolean = true;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
    private consejosService: ConsejosService
  ) {}

  tratamientos() {
    this.router.navigate(['/tratamientos']);
  }

  aboutme() {
    this.router.navigate(['/aboutme']);
  }

  mostrarConsejo() {
    const indice = Math.floor(Math.random() * this.consejos.length);
    this.consejoActual = this.consejos[indice];
  }

  turnos() {
    this.router.navigate(['/turnos']);
  }

  ngOnInit() {
    this.consejosService.getConsejos().subscribe((data: any) => {
      this.consejos = data.consejos;
      this.mostrarConsejo();
      this.interval = setInterval(() => this.mostrarConsejo(), 12000);
    });

    const logoImg: HTMLElement | null = document.getElementById('logoImg');
    if (logoImg !== null) {
      // Verificar si no es nulo
      const animTitle: Animation = this.animationCtrl
        .create()
        .addElement(logoImg)
        .duration(2000)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translate(-50%, -50%) scale(1)' },
          { offset: 0.25, transform: 'translate(-50%, -50%) scale(0.9)' },
          { offset: 0.5, transform: 'translate(-50%, -50%) scale(1)' },
          { offset: 0.85, transform: 'translate(-50%, -50%) scale(0.8)' },
          { offset: 1, transform: 'translate(-50%, -50%) scale(5)' },
        ]);

      animTitle.play();
    }

    setTimeout(() => this.closeLogo = false, 1900)
  }

  ionViewWillEnter() {
    const homeTitle: HTMLElement | null = document.getElementById('container'); // Especificar el tipo como HTMLElement | null
    if (homeTitle !== null) {
      // Verificar si no es nulo
      const animTitle: Animation = this.animationCtrl
        .create()
        .addElement(homeTitle)
        .duration(2000)
        .iterations(Infinity)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(0.95)' },
          { offset: 1, transform: 'scale(1)' },
        ]);
      animTitle.play();
    }

    const btnInpar: NodeListOf<HTMLElement> =
      document.querySelectorAll('#btn-inpar'); // Especificar el tipo como HTMLElement | null
    if (btnInpar !== null) {
      // Verificar si no es nulo
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(btnInpar)
        .duration(400)
        .fromTo('transform', 'translateX(500px)', 'translateX(0px)');
      animation.play();
    }

    const btnPar: NodeListOf<HTMLElement> =
      document.querySelectorAll('#btn-par'); // Especificar el tipo como HTMLElement | null
    if (btnPar !== null) {
      // Verificar si no es nulo
      const animation: Animation = this.animationCtrl
        .create()
        .addElement(btnPar)
        .duration(400)
        .fromTo('transform', 'translateX(-500px)', 'translateX(0px)');
      animation.play();
    }
  }
}
