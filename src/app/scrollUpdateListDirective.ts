import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[scroll-update-list]'
})

export class ScrollUpdateListDirective {
  @Output() updateList: EventEmitter<any> = new EventEmitter();

  constructor(private scrollContainer: ElementRef) { }

  @HostListener('scroll')
  onScroll() {
    let scrollElement = this.scrollContainer.nativeElement;
    /*
    console.log('scrollTop:' + scrollElement.scrollTop);
    console.log('scrollHeight' + scrollElement.scrollHeight);
    console.log('offsetHeight' + scrollElement.offsetHeight);
    */
    if (scrollElement.scrollHeight - scrollElement.scrollTop === scrollElement.offsetHeight) {
      this.updateList.emit();
    }
  }
}
