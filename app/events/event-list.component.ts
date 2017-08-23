import { Component, OnInit } from 'angular2/core'; // need to import OnInit
import { IEvent } from './event'; // import the Ievent Interface
import { EventFilterPipe } from './event-filter.pipe'; /// import the pipe
import { ThumbComponent } from '../shared/thumb.component';
import { EventService }	from './event.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

// styleUrls = add styles 
// pipes ~ like filters taken from the event-filter.pipe.ts
@Component ({
    templateUrl: 'app/events/event-list.component.html',
    styleUrls: ['app/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives: [ThumbComponent, ROUTER_DIRECTIVES]
})

// OnInit -> performs component initialisation and retreives data 
// OnChanges -> perform actions after change to input properties
// OnDestroy -> clean up before desturction


// OnInit is an interface
export class EventListComponent implements OnInit 
{ 
    // page title is bound to the read only interpolation variable {{pageTitle}}
    pageTitle: string = '+ Event List +';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    searchCriteria: string;
    // variable to hold events ( can be any[] if type is not know )
    events: IEvent[]; // an array of events
    errorMessage: string;
    
    // typescript --> every class has a constructor that runs when the class is created
    // so if we want to inject 
    // dependancy injection creates an instance of myService
    // class receives the instance of the service it needs ( dependencies )
    // can make a variable to hold the injected service i.e - private: -eventservice 
    // then set the value in the constructor --> _eventService = eventService
    // but shorthand define in the constructor definition
    constructor(private _eventService: EventService) 
    {

    } 
            
    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }
    // what happens when init
    ngOnInit(): void 
    {
		this._eventService.getEvents()
			.subscribe(events => this.events = events,
			error => this.errorMessage = <any>error);
	}
    // when notify occurs from the thumb event emitter the onRatingClicked function is calles with the event argument
    onRatingClicked(message: string): void 
    {
		this.pageTitle = 'Event List: ' + message;
	}
	
}
