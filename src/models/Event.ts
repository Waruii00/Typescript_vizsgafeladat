import { IEvent } from "../interfaces/IEvent";
import { IParticipant } from "../interfaces/IParticipant";
import { EventType } from "./EventType";

export class Event implements IEvent {
    id!: number;
    name: string;
    location: string;
    date: Date;
    type: EventType;
    participants: IParticipant[];

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