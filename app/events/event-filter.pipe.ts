import { PipeTransform, Pipe } from 'angular2/core';
import { IEvent } from './event';

// defines a class as a pipe 
// filters results
// for use in a template to pipe results
// pipe decorator 
@Pipe({
	name: 'eventFilter'
})

export class EventFilterPipe implements PipeTransform 
{
    // get the string value to filter by 
    // if there is a filter value then filter the list 
    // otherwise there is no value so return full list of events 
    // arrow sytax defines the filter function
    transform(value: IEvent[], args: string[]): IEvent[] 
    {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
		return filter ? value.filter((event: IEvent) =>
			event.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
    
}
