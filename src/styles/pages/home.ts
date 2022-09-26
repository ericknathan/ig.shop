import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  minHeight: 656,
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
});

export const Product = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  minWidth: 540,
  borderRadius: 8,

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '2rem',
    borderRadius: 6,

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
});
