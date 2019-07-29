import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MemoListPage } from './memo-list.page';
import { EditMemoPageModule } from '../edit-memo/edit-memo.module';

const routes: Routes = [
  {
    path: '',
    component: MemoListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    EditMemoPageModule
  ],
  declarations: [MemoListPage]
})
export class MemoListPageModule {}
