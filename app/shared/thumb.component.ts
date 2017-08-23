import { Component, Input , Output, EventEmitter } from 'angular2/core';

// thumb directive 
// give template 
// give style 

@Component({
    selector: 'acw-thumb',
    templateUrl: 'app/shared/thumb.component.html',
    styleUrls: ['app/shared/thumb.component.css']
})
export class ThumbComponent 
{
    // nested component often needs to interact with its parent component 
    // uses @input and @output
    @Input() rating: number;
    thumbWidth: number;
    // events are the only way to pass information to the outer/containing component
    // event emitter can send an error <generic> defines the type of event
    // @output allows container to expose the info defined also
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    // runs when the file is changed 
    // fires when @input property is changed
    ngOnChanges(): void 
    {
    	this.thumbWidth = this.rating * 86 / 5;
	}
	// from above the ratingClicked event emitter sends a string back to the outer coponent ( Event-list.component.ts)
	// insert the rating form the component 
	onClick() 
	{
	    this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }
}
