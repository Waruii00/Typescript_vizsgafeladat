
import { Participant } from "./models/Participant";
import { Event } from "./models/Event";
import { EventType } from "./models/EventType";
import { EventManager } from "./services/EventManager";

console.log("Event Manager starting...");

const participant = new Participant(
    "Anna",
    "anna@example.com"
);

const event = new Event(
    0,
    "Rock Festival",
    "Budapest Park",
    new Date("2026-09-20"),
    EventType.Festival
);

//event.participants.push(participant);

console.log(event);

const manager = new EventManager();

manager.addEvent(event);
manager.registerParticipant(1, participant);

console.log(manager.getEvents());

manager.unregisterParticipant(1, "anna@example.com");
console.log(manager.getEvents());

//console.log(manager.getEvents()[0].participants);

//manager.updateEvent(1, "Updated Rock Festival");

//console.log(manager.getEvents());

//manager.deleteEvent(1);

//console.log(manager.getEvents());