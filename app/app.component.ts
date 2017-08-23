import { Component } from 'angular2/core';
import { EventListComponent } from './events/event-list.component'; // import the event list component
import { EventService }	from './events/event.service'; // import eventservice to get data
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';  // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'; // importing the component needed for directives 
import { WelcomeComponent } from './home/welcome.component';
import {  EventDetailComponent } from './events/event-detail.component';
// IMPORT: allows us to use external modules that are exported from another module

// What is a component 
// One part = Template --> Indicates what should be rendered on the page
// Second part --> Class decides the backing code defines the data and logic 
// defines the data properties available 
// Methods: functions --> define the logic 
// THIRD: Meta data --> provides more data about the class and the component 
// METADATA: defined by decorators


// DECORATOR: a function that adds metadata to a class is members or its method arguements
// DECORATORS: prefixed with an @ sign
// @Component defines class as a component
// imported from angular2/core
// component decorator is a function therefore Component()
@Component({
	// selector indicates when a component needs to be refernced in html
	// selcetor defines the components directive name 
	// a directive is simply a custom html tag
	// a component should always have a template 
    selector: 'events-app', // define a selctor so that it can be used as a directive in another component
    // BINDING: passes data between the template and the component
    // {{}} : Interpolation: passes data only from a class to a template 
    // {{}} : can call methods and do maths and stirng functions
    // {{}} : Read only data
    // set the routerLink property of the <a> tag to an array of values --> the first element is the name of a route
    // other parameters can be added [] = propery i.e src
    // router-outlet - shows the outlet of a router action
    template: `
    <div>
	    <nav class='navbar navbar-default'>
		    <div class='container-fluid'>
			    <a class='navbar-brand'>{{pageTitle}}</a>
			    <ul class='nav navbar-nav'>
				    <li><a [routerLink]="['Welcome']">Home</a></li>
				    <li><a [routerLink]="['Events']">Event List</a></li>
			    </ul>
		    </div>
	    </nav>
	    <div class='container'>
			<router-outlet></router-outlet>
		</div>
    </div>
    `,
    // router-outlet above defines the directive wanted 
    // We need to add directives as an array to define all the deirectives and components used in the current component 
    // i.e here the directive is stored in the router direcitve but points to the EventListComponent
    // here it is the router directives 
    directives: [ROUTER_DIRECTIVES], 
    // below we need that both event-list and event-detail component use the eventService we register it here
    providers: [EventService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

// configuring routes 
// 1. give it a name - used in template or code to refence the routes -- every word must be capitlized
// 2. a url segment - when route is active /url is appended to the web url
// 3  a component asscosiated  - the routes is activated this component is used

// @routerconfig - defines the routes 
// takes an array of objects defined above 
@RouteConfig([
	{ path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
	{ path: '/events', name: 'Events', component: EventListComponent },
	{ path: '/event/:id', name: 'EventDetail', component: EventDetailComponent }
])

// AppComponent by convention is the root component
// export means that the component is made available to other parts of the application
export class AppComponent 
{
	// camelcase 
	// ts variable then type then default value
    pageTitle: string = 'Local Events App';
}
