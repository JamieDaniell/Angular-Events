// an interface
// defines a custom type
// in order to buil strong typing 

// export makes the data type(interface) available to the application
// each property has a type 

// put I on the front to define as an interface
export interface IEvent {
    name: string;
	code: string;
	description: string;
	date: string;
	time: string;
	duration: string;	
	fee: number;
	rating: number;
	imageUrl: string;
	location: Object;
	capacity: number;
}


