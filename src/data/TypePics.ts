type ImageType = {
    id: number,
    name: string,
    url: string,
}

const imagesTypes: ImageType[] = [
    {
        id: 1,
        name: 'Normal',
        url: require('../assets/Type/1.png')
    },
    {
        id: 2,
        name: 'Fighting',
        url: require('../assets/Type/2.png')
    },
    {
        id: 3,
        name: 'Flying',
        url: require('../assets/Type/3.png')
    },
    {
        id: 4,
        name: 'Poison',
        url: require('../assets/Type/4.png')
    },
    {
        id: 5,
        name: 'Ground',
        url: require('../assets/Type/5.png')
    },
    {
        id: 6,
        name: 'Rock',
        url: require('../assets/Type/6.png')
    },
    {
        id: 7,
        name: 'Bug',
        url: require('../assets/Type/7.png')
    },
    {
        id: 8,
        name: 'Ghost',
        url: require('../assets/Type/8.png')
    },
    {
        id: 9,
        name: 'Steel',
        url: require('../assets/Type/9.png')
    },
    {
        id: 10,
        name: 'Fire',
        url: require('../assets/Type/10.png')
    },
    {
        id: 11,
        name: 'Water',
        url: require('../assets/Type/11.png')
    },
    {
        id: 12,
        name: 'Grass',
        url: require('../assets/Type/12.png')
    },
    {
        id: 13,
        name: 'Electric',
        url: require('../assets/Type/13.png')
    },
    {
        id: 14,
        name: 'Psychic',
        url: require('../assets/Type/14.png')
    },
    {
        id: 15,
        name: 'Ice',
        url: require('../assets/Type/15.png')
    },
    {
        id: 16,
        name: 'Dragon',
        url: require('../assets/Type/16.png')
    },
    {
        id: 17,
        name: 'Dark',
        url: require('../assets/Type/17.png')
    },
    {
        id: 18,
        name: 'Fairy',
        url: require('../assets/Type/18.png')
    }
]

export { imagesTypes, ImageType }