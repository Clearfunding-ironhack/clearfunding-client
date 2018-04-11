import { Story } from '../models/story.model';

export const stories: Array<Story> = [
    {
        header: 'Cristian Garcia consigue el disco de Oro',
        // tslint:disable-next-line:max-line-length
        subheader: 'Gracias a las contribuciones de Clearfunding, el artista ha conseguido un hito unicamente conseguido por Shakira y Alejandro ',
        image: 'https://res.cloudinary.com/clearfundingproject/image/upload/v1523448233/clearfunding/clearfunding.jpg',
        createdAt: '2018-04-10'
    },
    {
        header: 'Liberamos a Puchi',
        subheader: 'Por fin, tras recaudar 30000€ para pagar la fianza, Clearfunding consiguió la libertad de Puigdemont',
        image: 'https://res.cloudinary.com/clearfundingproject/image/upload/v1523453471/clearfunding/clearfunding.jpg',
        createdAt: '2018-03-10'
    }
];
