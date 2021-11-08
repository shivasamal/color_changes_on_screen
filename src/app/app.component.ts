import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    setInterval(() => {
      this.toggleRedTheme();
      this.toggleBlueTheme();
      this.toggleDarkTheme();
      this.togglePinkTheme();
    }, 1000);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
  toggleRedTheme(): void {
    document.body.classList.toggle('red-theme');
  }
  toggleBlueTheme(): void {
    document.body.classList.toggle('blue-theme');
  }
  togglePinkTheme(): void {
    document.body.classList.toggle('pink-theme');
  }
}
