console.log("Event Manager starting...");
import { Participant } from "./models/Participant";
import { Event } from "./models/Event";
import { EventType } from "./models/EventType";

const participant = new Participant(
    "Anna",
    "anna@example.com"
);

const event = new Event(
    "Rock Festival",
    "Budapest Park",
    new Date("2026-09-20"),
    EventType.Festival
);

event.participants.push(participant);

console.log(event);