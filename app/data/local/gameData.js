import Images from '@assets/images';

/*Since we can't dynamically reference image assets through a JSON object. We have to hard code our data objects
Ideally we can use some REST Api to get our data*/

export const gameCards = [
    {
        text: '1',
        name: 'Earth',
        image: Images.earth,
        isPlanet: true,
    },
    {
        text: '2',
        name: 'Jupiter',
        image: Images.jupiter,
        isPlanet: true,
    },
    {
        text: '3',
        name: 'Mars',
        image: Images.mars,
        isPlanet: true,
    },
    {
        text: '4',
        name: 'Titan',
        image: Images.titan,
        isPlanet: false,
    },
    {
        text: '5',
        name: 'Moon',
        image: Images.moon,
        isPlanet: false,
    },
    {
        text: '6',
        name: 'Mars',
        image: Images.mars,
        isPlanet: true,
    },
];
