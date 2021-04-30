export class Threat {
    id: number;
    subject: string;
    planet: string;
    description: string;
    urgency: number;
    destruction: string;

    constructor(id: number, subject: string, planet: string, description: string, urgency: number, destruction: string) {
        this.id = id;
        this.subject = subject;
        this.planet = planet;
        this.description = description;
        this.urgency = urgency;
        this.destruction = destruction;
    }
}
