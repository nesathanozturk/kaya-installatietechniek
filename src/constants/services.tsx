import { Hammer, Lectern, Wrench } from 'lucide-react'

export const services = [
    {
        id: '1',
        title: 'Badkamer Plaatsen of Renoveren',
        description: 'Wij plaatsen of renoveren uw badkamer van A tot Z.',
        icon: <Lectern size={30} />,
    },
    {
        id: '2',
        title: 'Riolering en afvoer ontstoppen of reinigen',
        description: 'Wij ontstoppen of reinigen uw riolering en afvoer.',
        icon: <Hammer size={30} />,
    },
    {
        id: '3',
        title: 'Waterleidingen en riolering (ver)plaatsen of vervangen',
        description: 'Wij plaatsen of vervangen uw waterleidingen en riolering.',
        icon: <Wrench size={30} />,
    },
]
