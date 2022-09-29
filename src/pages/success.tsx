import { GetServerSideProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import { SuccessContainer, ImageContainer } from '../styles/pages/success';

interface SuccessProps {
  purchase: {
    customerName: string;
    product: {
      name: string;
      imageUrl: string;
    };
  };
}

export default function Success({ purchase }: SuccessProps) {
  const { customerName, product } = purchase;

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={140}
            height={100}
            alt={`Imagem da camiseta ${product.name}`}
          />
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.{' '}
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });
  const productData = session.line_items.data[0].price
    .product as Stripe.Product;

  const customerName = session.customer_details.name;
  const productName = productData.name;
  const productImageUrl = productData.images[0];

  return {
    props: {
      purchase: {
        customerName,
        product: {
          name: productName,
          imageUrl: productImageUrl,
        },
      },
    },
  };
};
