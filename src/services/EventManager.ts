import { Event } from "../models/Event";
import { Participant } from "../models/Participant";

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

    updateEvent(id: number, newName: string): void {
        const event = this.events.find(event => event.id === id);

        if (event) {
            event.name = newName;
        }
    }

    deleteEvent(id: number): void {
        this.events = this.events.filter(event => event.id !== id);
    }

    registerParticipant(eventId: number, participant: Participant): void {
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
}