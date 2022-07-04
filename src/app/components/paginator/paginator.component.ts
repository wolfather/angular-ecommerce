import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  @Output() setPage: EventEmitter<number> = new EventEmitter<number>(true);
  @Input() pagesNumber: number[] = [];
  public currentPage = 0;

  constructor() {}

  public setPagination(page: number): void {
    this.setPage.emit(page);
    this.currentPage = page;
  }

  public trackByLoop(index: number, item: number): number {
    console.log('tracker');
    return item;
  }
}
