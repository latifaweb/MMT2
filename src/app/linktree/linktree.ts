import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LinkService } from '../services/link.service';
import { Link, Profile } from '../interfaces/link.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './linktree.html',
  styleUrls: ['./linktree.css']
})
export class LinktreeComponent implements OnInit {
  profile$!: Observable<Profile>;
  links$!: Observable<Link[]>;

  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.profile$ = this.linkService.profile$;
    this.links$ = this.linkService.links$;
  }
}

