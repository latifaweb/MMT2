import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-kerja-sama',
  imports: [CommonModule],
  templateUrl: './kerja-sama.html',
  styleUrl: './kerja-sama.css'
})
export class KerjaSama implements OnInit, OnDestroy {
  
  // Properties untuk template
  isMobile: boolean = false;
  contactText: string = 'Dapat menghubungi kontak kami dengan klik button dibawah ini';
  
  // URL gambar - ganti dengan URL asli Anda
  mobileImageUrl: string = 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751705806/Kerja_sama_d4qrxr.png';
  desktopImageUrl: string = 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751705806/Kerja_sama_pc_rcb5kg.png';
  
  // WhatsApp configuration
  whatsappNumber: string = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
  whatsappMessage: string = 'Halo, saya tertarik untuk kerja sama sponsorship';
  
  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
  
  ngOnInit(): void {
    this.checkScreenSize();
  }
  
  ngOnDestroy(): void {
    // Cleanup jika diperlukan
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }
  
  private checkScreenSize(): void {
    // Menggunakan window.innerWidth untuk deteksi mobile
    // Breakpoint 768px sesuai dengan Tailwind MD breakpoint
    this.isMobile = window.innerWidth < 768;
  }
  
  onWhatsAppClick(): void {
    // Optional: Tambahkan analytics atau logging
    console.log('WhatsApp button clicked');
    
    // Optional: Tambahkan tracking event jika menggunakan Google Analytics
    // gtag('event', 'click', {
    //   event_category: 'sponsorship',
    //   event_label: 'whatsapp_contact'
    // });
  }
  
  // Method untuk update gambar URLs jika diperlukan
  updateImageUrls(mobileUrl: string, desktopUrl: string): void {
    this.mobileImageUrl = mobileUrl;
    this.desktopImageUrl = desktopUrl;
  }
  
  // Method untuk update WhatsApp config
  updateWhatsAppConfig(number: string, message: string): void {
    this.whatsappNumber = number;
    this.whatsappMessage = message;
  }
}