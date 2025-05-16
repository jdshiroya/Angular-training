import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count > 3){
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });
    this.firstObsSubscription = customIntervalObservable.pipe(
      filter((data:number) => data%2 !== 0 ? true : false),
      map((data: number) => {
        return 'Round: ' + (data + 1);
      })
    ).subscribe(data => {
      console.log(data);
    },error => {
      console.log(error);
      alert(error.message);
    }
  );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
function handler(args_0: any, args_1: number): void {
  throw new Error('Function not implemented.');
}
