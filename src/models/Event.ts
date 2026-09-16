import { Participant } from "./Participant";
import { EventType } from "./EventType";

export class Event {
    name: string;
    location: string;
    date: Date;
    type: EventType;
    participants: Participant[];

    constructor(
        name: string,
        location: string,
        date: Date,
        type: EventType
    ) {
        this.name = name;
        this.location = location;
        this.date = date;
        this.type = type;
        this.participants = [];
    }
}