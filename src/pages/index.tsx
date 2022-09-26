import Image from 'next/future/image';
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '../styles/pages/home';

import shirt1 from '../assets/shirts/ignite-aboard.png';
import shirt2 from '../assets/shirts/ignite-lab-reactjs.png';
import shirt3 from '../assets/shirts/maratona-explorer-azul.png';
import shirt4 from '../assets/shirts/maratona-explorer-laranja.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="Imagem de camiseta" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="Imagem de camiseta" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="Imagem de camiseta" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt4} width={520} height={480} alt="Imagem de camiseta" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}