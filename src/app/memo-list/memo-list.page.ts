import { Component, OnInit } from '@angular/core';
import { MemoService } from '../memo/memo.service';
import { IMemo } from '../memo/memo';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.page.html',
  styleUrls: ['./memo-list.page.scss'],
})
export class MemoListPage implements OnInit {

  constructor(public memoService: MemoService) { }

  ngOnInit() {
  }

  public createMemo() {
    this.memoService.push('new memo');
  }

  public deleteMemo(memo: IMemo) {
    this.memoService.remove(memo.key);
  }

}
