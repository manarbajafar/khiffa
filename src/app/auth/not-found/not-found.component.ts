import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderer.addClass(this.el.nativeElement.querySelector('.not-found-container'), 'fade-out');
    }, 2000);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}
