import { IEvent } from "../interfaces/IEvent";
import { Participant } from "./Participant";
import { EventType } from "./EventType";

export class Event implements IEvent {
    id: number;
    name: string;
    location: string;
    date: Date;
    type: EventType;
    participants: Participant[];

    constructor(
        id: number,
        name: string,
        location: string,
        date: Date,
        type: EventType
    ) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.type = type;
        this.participants = [];
    }
}