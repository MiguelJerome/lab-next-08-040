import Head from "next/head";
import FormControl from "../components/FormControl";
import FormLibrairie from "../components/FormLibrairie";
import FormNoControl from "../components/FormNoControl";

export default function Forms() {
    return <>
        <Head>
            <title>Laboratoire - Forms</title>
            <meta name="description" content="Présentation des différentes façon d'utiliser les formulaires avec React." />

            <meta property="og:title" content="Laboratoire - Forms" />
            <meta property="og:description" content="Présentation des différentes façon d'utiliser les formulaires avec React." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>

        <main>
            <section>
                <h2>Formulaire non controllé</h2>
                <FormNoControl />
            </section>

            <section>
                <h2>Formulaire controllé</h2>
                <FormControl />
            </section>

            <section>
                <h2>Formulaire librairie</h2>
                <FormLibrairie />
            </section>
        </main>
    </>
}