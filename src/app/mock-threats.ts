import { Threat } from './threat';

export const THREATS: Threat[] = [
    // tslint:disable:max-line-length
     { id: 1, subject: 'Everything is disappearing', planet: 'Gazorpazorp', description: 'Eating everything, growing and growing. Gonna eat the worlds.', urgency: 3, destruction: 'Unknown' },
     { id: 2, subject: 'ABC', planet: 'Alphabetrium', description: 'Changing everyone into tiny letters.', urgency: 1, destruction: 'May 2019' },
     { id: 3, subject: 'A giant bomb', planet: 'Gromflom Prime', description: 'Been building for years, a giant stink bomb to blow up The Galactic Federation', urgency: 2, destruction: 'April 15th 2018' },
     { id: 4, subject: 'Screaming your ear off', planet: 'Screaming Sun Earth', description: 'A giant boombox is nearly ready to emplify the planets scream to the whole Galaxy.', urgency: 1, destruction: 'May 2018' }

];

export const PENDING_THREATS: Threat[] = [
    // tslint:disable:max-line-length
     { id: 5, subject: 'O god damnit!', planet: 'On a Cob Planet', description: 'The On-a-cob DNA is contagious and is infecting all the guests that visit the planet. The guests are now spreading it around the Galaxy.', urgency: 1, destruction: 'December 2018' },
     { id: 6, subject: 'MEGADANGER!', planet: 'Planet Earth', description: 'Earth is in grave grave danger!', urgency: 1, destruction: 'December 2019' }
];
