import Head from 'next/head';

export default function NotFound() {
    return <>
        <Head>
            <title>Laboratoire - Page non trouvé</title>
            <meta name="description" content="Page non trouvé." />
        </Head>

        <div>
            404 | Not Found
        </div>
    </>
}