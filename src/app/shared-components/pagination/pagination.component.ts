import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() total_items : any;
  @Input() current_page : any;
  @Input() items_per_page : any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  total_pages=0;
  pages: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if(this.total_items){
      this.total_pages = Math.ceil(this.total_items / this.items_per_page);
      this.pages= Array.from({length:this.total_pages},(_,i)=> i+1);
    }
  }

  pageClicked(page:number){
    // if(page <= this.total_pages)
    if(page > this.total_pages || page == 0) return;
    this.onClick.emit(page);
  }
}
