import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }
  public toggleFlag = false;
  public showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }
  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
