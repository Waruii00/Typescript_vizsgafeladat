import { Participant } from "../models/Participant";
import { EventType } from "../models/EventType";

export interface IEvent {
    id: number;
    name: string;
    location: string;
    date: Date;
    type: EventType;
    participants: Participant[];
}