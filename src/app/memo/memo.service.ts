import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { IMemo, IKeyValuePair } from './memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  public readonly memos$: BehaviorSubject<IKeyValuePair<IMemo>[]>;

  constructor(private storage: Storage) {
    this.memos$ = new BehaviorSubject([]);
    this.storage.ready().then(() => this.fetchMemos());
  }

  async fetchMemos() {
    const keyValues: IKeyValuePair<IMemo>[]  = [];
    await this.storage.forEach((v: IMemo, k: string) => {
      keyValues.push({
        key: k,
        value: {
          title: v.title,
          content: v.content
        }
      });
    });
    this.memos$.next(keyValues);
  }

  async set(key: string, updatedMemo: IMemo) {
    this.storage.set(key, updatedMemo);
  }

  async push(memo: IMemo): Promise<IMemo> {
    const nextKey = await this.storage.length();
    const newMemo = {
      key: nextKey.toString(),
      value: memo
    };
    await this.storage.set(nextKey.toString(), memo);
    this.memos$.next([...this.memos$.value, newMemo]);
    return Promise.resolve(memo);
  }

  async remove(key: string) {
    await this.storage.remove(key);
    await this.fetchMemos();
  }
}
