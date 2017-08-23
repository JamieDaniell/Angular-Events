import { Injectable } from 'angular2/core';
import { IEvent } from './event';
import { Http, Response } from 'angular2/http'; // needed to get data from the web
import { Observable } from 'rxjs/Observable'; // needed to asncrounously get data 

// decorator only really needed if there is a service injected into this one 
@Injectable()

// create a service class 
export class EventService 
{
    
    private _eventUrl = 'https://angular-jamiedaniell.c9users.io/data.json';
    
    // gives a variable of _http type 
    constructor(private _http: Http){ }
    
    // returns an array of events 
    getEvents(): Observable<IEvent[]> 
    {
		return this._http.get(this._eventUrl) // get the events array
			.map((response: Response) => <IEvent[]>response.json()) // map the results to an array
			.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
	}
	
	private handleError(error: Response) 
	{
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
