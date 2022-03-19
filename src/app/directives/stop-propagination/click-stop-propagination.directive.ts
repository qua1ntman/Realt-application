import { Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickStopPropagination]'
})
export class ClickStopPropaginationDirective {

  @HostListener("click", ["$event"])
  public onClick(event: MouseEvent): void {event.stopPropagation()}
}
