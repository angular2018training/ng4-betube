import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
	moduleId: module.id,
	selector: 'zvn-admin-training',
	templateUrl: './../templates/training.component.html'
})
export class TrainingComponent implements OnInit {

	items: FirebaseListObservable<any[]>;
	item: FirebaseObjectObservable<any>;

	constructor(db: AngularFireDatabase) {
		this.items = db.list('/items', {
			query: {
				//orderByChild: 'ordering',
    			//equalTo: "2",
    			orderByKey: true,
			}
		});
		this.item  = db.object('/items/khiuids');

		
		// const promise = db.object('/items/abc').remove();
		// promise.then(_ => console.log('success'))
  // 				.catch(err => console.log(err, 'You dont have access!'));

		// const itemObservable = db.object('/items/abc');
		// itemObservable.set({ ordering: 200, name: 'typescript'});
		// console.log(this.items );

		// const itemObservable = db.object('/items/abc');
		// itemObservable.update({ ordering: 150 });

		// const test = db.list('/items');
		// test.push({ id: 1, name: 'Angular', ordering: 1});
		// test.push({ id: 2, name: 'PHP', ordering: 2});
		// test.push({ id: 3, name: 'Typescript', ordering: 4});
		// test.update('-KlIWyVbQxjwx9e9v9uq', { name: "abc 123" });
		// test.remove();
	}

	ngOnInit() {

	}
}