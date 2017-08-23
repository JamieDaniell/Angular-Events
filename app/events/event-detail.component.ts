import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

@Component({
	templateUrl: 'app/events/event-detail.component.html'
})

export class EventDetailComponent 
{
	pageTitle: string = 'Event Detail';
	
	// _router instance created 
	// when class is created constructor runs and lets the id be shown 
	// also the id is taken from the router 
	constructor(private _routeParams: RouteParams, private _router: Router) 
	{
		let id = this._routeParams.get('id');
		this.pageTitle += `: ${id}`;
	}
	// if function called router navigates back to events
	onBack(): void 
	{
		this._router.navigate(['Events']);
	}
}
