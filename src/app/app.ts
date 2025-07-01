import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LinkService } from './services/link.service';
import { Link, Profile } from './interfaces/link.interface';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LinktreeComponent } from "./linktree/linktree";
import { AppHome } from "./home/home";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  profile$!: Observable<Profile>;
  links$!: Observable<Link[]>;

  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.profile$ = this.linkService.profile$;
    this.links$ = this.linkService.links$;
  }
}