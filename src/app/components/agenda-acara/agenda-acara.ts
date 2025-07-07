import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Story {
  nama: string;
  highlight: string;
  cerita: string;
  foto: string;
}

@Component({
  selector: 'app-agenda-acara',
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './agenda-acara.html',
  styleUrl: './agenda-acara.css'
})
export class AgendaAcara implements OnInit {
  stories: Story[] = [];
  loading = true;
  error: string | null = null;
  selectedStory: number | null = null; // For modal
  
  private apiUrl = 'https://script.google.com/macros/s/AKfycbyvEg0vJv9L7jfrcy1DVJrSNBPxgMrnDXDiilJ1VouqAc2IxTWtdhTH3waLQoPxWr8_/exec';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadStories();
  }

  loadStories() {
    this.loading = true;
    this.error = null;
    
    this.http.get<Story[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Gagal memuat cerita. Silakan coba lagi.';
        this.loading = false;
        console.error('Error loading stories:', err);
      }
    });
  }

  // Modal methods
  openModal(index: number) {
    this.selectedStory = index;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedStory = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/600x400/374151/9CA3AF?text=Gambar+Tidak+Tersedia';
  }
}