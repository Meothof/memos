import { Component, OnInit } from '@angular/core';
import { MemoService } from '../memo/memo.service';
import { IMemo, IKeyValuePair } from '../memo/memo';
import { ModalController } from '@ionic/angular';
import { EditMemoPage } from '../edit-memo/edit-memo.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.page.html',
  styleUrls: ['./memo-list.page.scss'],
})
export class MemoListPage implements OnInit {

  constructor(
    public memoService: MemoService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async createMemo() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: EditMemoPage,
        componentProps: {
          memo: undefined
        }
      });
    modal.onDidDismiss().then((detail: OverlayEventDetail<IMemo>) => {
      if (detail != null) {
        console.log('The result:', detail.data);
        this.memoService.push(detail.data);
      }
    });
    await modal.present();
  }

  public async editMemo(selectedMemo: IKeyValuePair<IMemo>) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: EditMemoPage,
        componentProps: {
          memo: selectedMemo.value
        }
      });
    modal.onDidDismiss().then((detail: OverlayEventDetail<IMemo>) => {
      if (detail != null) {
        console.log('The result:', detail.data);
        this.memoService.set(selectedMemo.key, detail.data);
      }
    });
    await modal.present();
  }

  public deleteMemo(memoKey: string) {
    this.memoService.remove(memoKey);
  }

}
