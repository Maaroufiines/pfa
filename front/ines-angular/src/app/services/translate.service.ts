import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class translateSubject {
    lang: any = localStorage.getItem('lang')

    private myDataSubject = new BehaviorSubject<string>(this.lang);

    // Expose an observable to allow components to subscribe to changes
    myData$ = this.myDataSubject.asObservable();

    // Function to update the global state
    updateMyData(newData: string) {
        this.myDataSubject.next(newData);
    }
}
