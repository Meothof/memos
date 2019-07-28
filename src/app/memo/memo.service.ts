import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { IMemo } from './memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  public readonly memos$: BehaviorSubject<IMemo[]>;

  constructor(private storage: Storage) {
    this.memos$ = new BehaviorSubject([]);
    this.storage.ready().then(() => this.fetchMemos());
  }

  async fetchMemos() {
    const keyValues = [];
    await this.storage.forEach((v: any, k: string) => {
      keyValues.push({
        key: k,
        content: v
      });
    });
    this.memos$.next(keyValues);
  }

  async push(memoContent: any): Promise<IMemo> {
    const nextKey = await this.storage.length();
    console.log(nextKey)
    await this.storage.set(nextKey.toString(), memoContent);
    const newMemo = {key: nextKey.toString(), content: memoContent} as IMemo;
    this.memos$.next([...this.memos$.value, newMemo]);
    return Promise.resolve(newMemo);
  }

  async remove(key: string) {
    await this.storage.remove(key);
    await this.fetchMemos();
  }
}
