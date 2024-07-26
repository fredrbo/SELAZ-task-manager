import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  opened = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.opened = window.innerWidth > 768;
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.opened = window.innerWidth > 768;
    }
  }
}

