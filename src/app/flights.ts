export interface Flight {
    id: number;
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: string;
    departureDate: string;
    timeToDepart: number;
    gate: number;
    status: string;
}

export const flights = [
    {
        id: 1,
        flightNumber: '427',
        origin: 'Tampa, FL',
        destination: 'Norfolk',
        departureTime: '2:05pm',
        departureDate: 'January 25, 2022',
        timeToDepart: 5,
        gate: 92,
        status: 'On Time'
    },
    {
        id: 2,
        flightNumber: '65784H',
        origin: 'Tampa, FL',
        destination: 'New York City',
        departureTime: '2:05pm',
        departureDate: 'January 25, 2022',
        timeToDepart: 5,
        gate: 92,
        status: 'Delayed'
    },
    // {
    //     id: 3,
    //     flightNumber: '427',
    //     origin: 'Tampa, FL',
    //     destination: 'Norfolk',
    //     departureTime: '2:05pm',
    //     departureDate: 'January 25, 2022',
    //     timeToDepart: 5,
    //     gate: 92,
    //     status: 'On Time'
    // }
];