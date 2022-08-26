import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isUserAuthenticated() {
    const token: string | null = localStorage.getItem("jwt");
    return token != null;
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
}
