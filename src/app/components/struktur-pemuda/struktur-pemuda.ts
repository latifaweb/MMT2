
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

interface OrganisasiMember {
  nomor: number;
  nama: string;
  divisi: string;
  jabatan: string;
  foto: string;
}

interface GroupedMembers {
  [key: string]: OrganisasiMember[];
}

@Component({
  selector: 'app-struktur-pemuda',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './struktur-pemuda.html',
  styleUrl: './struktur-pemuda.css'
})
export class StrukturPemuda implements OnInit {
  members: OrganisasiMember[] = [];
  groupedMembers: GroupedMembers = {};
  loading = true;
  error = '';
  showModal = false;
  selectedMember: OrganisasiMember | null = null;

  private apiUrl = 'https://script.google.com/macros/s/AKfycbwMi1cmhMzxyHPS8L6soQ-LTcAli-wqo-u3Cywzd8owgf_j6I6vhHPyrfycNVXyH-J9sg/exec';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadOrganisasiData();
  }

  loadOrganisasiData() {
    this.loading = true;
    this.http.get<OrganisasiMember[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.members = data;
        this.groupMembers();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Gagal memuat data organisasi';
        this.loading = false;
        console.error('Error loading data:', err);
      }
    });
  }

  groupMembers() {
    // Reset grouped members
    this.groupedMembers = {};
    
    // Group members by divisi
    this.members.forEach(member => {
      if (!this.groupedMembers[member.divisi]) {
        this.groupedMembers[member.divisi] = [];
      }
      this.groupedMembers[member.divisi].push(member);
    });

    // Sort members within each division (Ketua first, then Wakil Ketua, then Anggota)
    Object.keys(this.groupedMembers).forEach(divisi => {
      this.groupedMembers[divisi].sort((a, b) => {
        const jabatanOrder = { 'Ketua': 1, 'Wakil Ketua': 2, 'Anggota': 3 };
        return (jabatanOrder[a.jabatan as keyof typeof jabatanOrder] || 4) - 
               (jabatanOrder[b.jabatan as keyof typeof jabatanOrder] || 4);
      });
    });
  }

  getDivisiKeys(): string[] {
    return Object.keys(this.groupedMembers);
  }

  // Divisi yang ditampilkan di bagian pengurus inti
  pengurusIntiDivisi: string[] = ['Bendahara', 'Sekretaris'];
  pengurusIntiDivisi2: string[] = ['Umum','Bendahara', 'Sekretaris'];

  // Method untuk mengecek apakah divisi termasuk pengurus inti
  isPengurusInti(divisi: string): boolean {
    return this.pengurusIntiDivisi2.includes(divisi);
  }

  // Method untuk mendapatkan divisi yang bukan pengurus inti
  getDivisiLainnya(): string[] {
    return this.getDivisiKeys().filter(divisi => !this.isPengurusInti(divisi));
  }

  // Method untuk mendapatkan anggota pengurus inti
  getPengurusInti(): OrganisasiMember[] {
    const pengurusInti: OrganisasiMember[] = [];
    this.pengurusIntiDivisi.forEach(divisi => {
      if (this.groupedMembers[divisi]) {
        pengurusInti.push(...this.groupedMembers[divisi]);
      }
    });
    return pengurusInti;
  }

  getJabatanClass(jabatan: string): string {
    switch (jabatan) {
      case 'Ketua':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Wakil Ketua':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'Sekretaris':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white';
      case 'Bendahara':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  }

  getKetuaCount(): number {
    return this.members.filter(member => member.jabatan === 'Ketua').length;
  }

  getAnggotaCount(): number {
    return this.members.filter(member => member.jabatan === 'Anggota').length;
  }

  getWakilKetuaCount(): number {
    return this.members.filter(member => member.jabatan === 'Wakil Ketua').length;
  }

  // Modal methods
  openModal(member: OrganisasiMember) {
    this.selectedMember = member;
    this.showModal = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedMember = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  onImageError(event: any) {
    event.target.style.display = 'none';
  }
}