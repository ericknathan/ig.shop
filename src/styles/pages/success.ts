import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: 656,
  maxHeight: '75vh',
  margin: '0 auto',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  p: {
    maxWidth: 560,
    marginTop: '2rem',

    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
  },

  a: {
    display: 'block',
    marginTop: '5rem',

    color: '$green500',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 130,
  height: 145,
  padding: '0.25rem',
  marginTop: '4rem',
  borderRadius: 8,

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'cover',
  },
});
