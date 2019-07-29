import { Component, OnInit } from '@angular/core';
import { IMemo } from '../memo/memo';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-edit-memo',
  templateUrl: './edit-memo.page.html',
  styleUrls: ['./edit-memo.page.scss'],
})
export class EditMemoPage implements OnInit {
  memo: IMemo;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.memo = this.navParams.get('memo');
    if (!this.memo) {
      this.memo = {title: '', content: ''} as IMemo;
    }
  }

  async submitForm() {
    await this.modalController.dismiss(this.memo);
  }

}
