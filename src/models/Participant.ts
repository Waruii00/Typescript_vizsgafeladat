import { IParticipant } from "../interfaces/IParticipant";

export class Participant implements IParticipant {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}