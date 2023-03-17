import Compteur from '../components/Compteur'
import Info from '../components/Info'
import Toggler from '../components/Toggler'
import CompteARebours from "../components/CompteARebours";
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';

export default function Accueil() {
    return <>
      <Head>
        <title>Laboratoire - Accueil</title>
        <meta name="description" content="Page d&apos;accueil du projet laboratoire présentant plusieurs composants React." />
        
        <meta property="og:title" content="Laboratoire - Accueil" />
        <meta property="og:description" content="Page d&apos;accueil du projet laboratoire présentant plusieurs composants React." />
        <meta property="og:image" content="http://localhost:3000/logo.png" />
      </Head>

      <main>
      <div>
        <FormattedMessage id="app.home.welcome" />
      </div>
    
      <CompteARebours compte={20} />

      {/*<CompteARebours compte={5} href="/contact" />*/}

      <Compteur />
      <Compteur depart={50} />

      <Toggler titre="Ceci est un titre" visible>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut ullam quasi doloremque? Temporibus labore eaque possimus reiciendis nemo quae nulla obcaecati sit. Dolorem, omnis. Tempore at perspiciatis similique suscipit?
      </Toggler>

      <Toggler titre="Spoil">
        Allo!
      </Toggler>

      <Info>
        Allo, je suis simple
      </Info>

      <Info color="blue">
        <p>Bonjour, je suis bleu</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Expedita nemo debitis, vel quos excepturi aliquid nulla
          sint sed reprehenderit rem possimus magnam illo ullam
          quidem saepe eos ratione dolorum commodi.
        </p>
      </Info>

      <Info color="green">
        Salut, je suis vert
      </Info>
    </main>
  </>
}