
import { Participant } from "./models/Participant";
import { Event } from "./models/Event";
import { EventType } from "./models/EventType";
import { EventManager } from "./services/EventManager";

console.log("Event Manager starting...");

const participant = new Participant(
    "Anna",
    "anna@example.com"
);

const participant2 = new Participant(
    "Béla",
    "bela@example.com"
);

const event = new Event(
    "Rock Festival",
    "Budapest Park",
    new Date("2026-09-20"),
    EventType.Festival
);

const event2 = new Event(
    "Summer Concert",
    "Budapest Park",
    new Date("2026-08-15"),
    EventType.Concert
);

//event.participants.push(participant);

//console.log(event);

const manager = new EventManager();

manager.addEvent(event);
manager.addEvent(event2);

manager.updateEvent(
    1,
    "Updated Rock Festival",
    "Budapest Arena",
    new Date("2026-09-25"),
    EventType.Concert
);

console.log(manager.getEvents());

const foundEvent = manager.getEventById(1);
console.log("Event with ID 1:", foundEvent);

manager.registerParticipant(1, participant);
manager.registerParticipant(2, participant2);

console.log("Participants of event 1:", manager.getParticipants(1));
console.log("Participants of event 2:", manager.getParticipants(2));

const participants = manager.getParticipants(1);
console.log("Participants of event 1:", participants);

manager.deleteEvent(2);

console.log("Events after deleting event 2:", manager.getEvents());

//console.log(manager.getEventsByType(EventType.Festival));


//console.log(manager.getEventsByType(EventType.Concert));

//console.log(manager.getEvents());

//manager.unregisterParticipant(1, "anna@example.com");
//console.log(manager.getEvents());

//console.log(manager.getEvents()[0].participants);

//manager.updateEvent(1, "Updated Rock Festival");

//console.log(manager.getEvents());

//manager.deleteEvent(1);

//console.log(manager.getEvents());