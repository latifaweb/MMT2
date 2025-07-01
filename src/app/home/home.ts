// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  description: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterModule,RouterOutlet],
  templateUrl: './home.html',
  styleUrl:'./home.css',
})
export class AppHome {
  menuItems = [
    {
      title: 'Struktur Pemuda',
      description: 'Struktur kepanitiaan Muda Mudi Tangsi dalam acara menyambut HUT RI - 80 (2025)',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/struktur-pemuda'
    },
    {
      title: 'Jejak Cerita',
      description: 'Merangkai kisah dan kenangan kampung Tangsi untuk dikenang dan diteruskan.',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/agenda-acara'
    },
    {
      title: 'Sosial Media',
      description: 'Berikut adalah sosial media resmi Muda Mudi Tangsi 18',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/sosial-media'
    },
    {
      title: 'Kerja Sama',
      description: 'Syarat & ketentuan untuk partner kerja sama',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/kerja-sama'
    }
  ];

  constructor(private router: Router) {}

  trackByTitle(index: number, item: any): string {
    return item.title;
  }

  onMenuClick(item: any): void {
    this.router.navigate([item.route]);
  }
}