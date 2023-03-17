import Gallerie from "../components/Gallerie";
import Head from 'next/head';

export default function Images() {
    const images = [
        { src: 'https://img.pokemondb.net/artwork/bulbasaur.jpg', alt: 'Bulbasaur', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/drifloon.jpg', alt: 'Drifloon', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/bellossom.jpg', alt: 'Bellossom', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/staravia.jpg', alt: 'Staravia', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/zebstrika.jpg', alt: 'Zebstrika', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/vector/jellicent-female.png', alt: 'Jellicent', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/chandelure.jpg', alt: 'Chandelure', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/vector/fletchinder.png', alt: 'Fletchinder', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/vector/honedge.png', alt: 'Honedge', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/alt/litten-usum.jpg', alt: 'Litten', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/alt/mimikyu-alt1.jpg', alt: 'Mimikyu', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/alt/sobble-alt.jpg', alt: 'Sobble', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/sirfetchd.jpg', alt: 'Sirfetch\'d', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/alt/pikachu-alt1.jpg', alt: 'Pikachu', width: 360, height: 336 },
        { src: 'https://img.pokemondb.net/artwork/original/umbreon-gen2.jpg', alt: 'Umbreon', width: 360, height: 336 }
    ];

    return <>
        <Head>
            <title>Laboratoire - Images</title>
            <meta name="description" content="Présentation du composant Gallerie qui permet d'afficher une liste d'images." />
        
            <meta property="og:title" content="Laboratoire - Images" />
            <meta property="og:description" content="Présentation du composant Gallerie qui permet d'afficher une liste d'images." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            <Gallerie images={images} />
        </main>
    </>
}