import { Event } from "../models/Event";
import { IParticipant } from "../interfaces/IParticipant";
import { EventType } from "../models/EventType";

export class EventManager {
    private events: Event[];
    private nextId: number;

    constructor() {
        this.events = [];
        this.nextId = 1;
    }

    addEvent(event: Event): void {
        event.id = this.nextId;
        this.nextId++;
        this.events.push(event);
    }

    getEvents(): Event[] {
        return this.events;
    }

    getEventById(id: number): Event | undefined {
        return this.events.find(event => event.id === id);
    }

    getParticipants(eventId: number): IParticipant[] {
        const event = this.events.find(event => event.id === eventId);

        if (event) {
            return event.participants;
        }

        return [];
    }

    updateEvent(
        id: number,
        newName: string,
        newLocation: string,
        newDate: Date,
        newType: EventType
    ): void {
        const event = this.events.find(event => event.id === id);

        if (event) {
            event.name = newName;
            event.location = newLocation;
            event.date = newDate;
            event.type = newType;
        }
    }

    deleteEvent(id: number): void {
        this.events = this.events.filter(event => event.id !== id);
    }

    registerParticipant(eventId: number, participant: IParticipant): void {
        const event = this.events.find(event => event.id === eventId);

        if (event) {
            event.participants.push(participant);
        }
    } 
    
    unregisterParticipant(eventId: number, email: string): void {
        const event = this.events.find(event => event.id === eventId);

        if (event) {
            event.participants = event.participants.filter(
                participant => participant.email !== email
            );
        }
    }

    getEventsByType(type: EventType): Event[] {
        return this.events.filter(event => event.type === type);
    }
}