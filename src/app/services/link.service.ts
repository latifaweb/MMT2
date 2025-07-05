import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Link, Profile } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private profileSubject = new BehaviorSubject<Profile>({
    name: 'MUDA MUDI TANGSI 18',
    bio: 'Website resmi Muda Mudi Tangsi 18',
    avatar: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751008030/1_be6dmn.png',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff'
  });

  private linksSubject = new BehaviorSubject<Link[]>([
    {
      id: 1,
      title: 'Instagram',
      url: 'https://www.instagram.com/mudamuditangsi/',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751707340/instagram_edxz9f.png',
      isActive: true
    },
    {
      id: 2,
      title: 'TikTok',
      url: 'https://www.tiktok.com/@mudamuditangsi',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751707340/tiktok_jqmplw.png',
      isActive: true
    },
    {
      id: 3,
      title: 'Youtube',
      url: 'https://github.com',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751707340/youtube_mmcvk2.png',
      isActive: true
    },
  ]);

  get profile$(): Observable<Profile> {
    return this.profileSubject.asObservable();
  }

  get links$(): Observable<Link[]> {
    return this.linksSubject.asObservable();
  }

  updateProfile(profile: Profile): void {
    this.profileSubject.next(profile);
  }

  addLink(link: Omit<Link, 'id'>): void {
    const currentLinks = this.linksSubject.value;
    const newId = Math.max(...currentLinks.map(l => l.id)) + 1;
    const newLink: Link = { ...link, id: newId };
    this.linksSubject.next([...currentLinks, newLink]);
  }

  updateLink(updatedLink: Link): void {
    const currentLinks = this.linksSubject.value;
    const index = currentLinks.findIndex(l => l.id === updatedLink.id);
    if (index !== -1) {
      currentLinks[index] = updatedLink;
      this.linksSubject.next([...currentLinks]);
    }
  }

  deleteLink(id: number): void {
    const currentLinks = this.linksSubject.value;
    this.linksSubject.next(currentLinks.filter(l => l.id !== id));
  }
}