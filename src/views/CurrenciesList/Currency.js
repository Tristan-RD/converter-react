import { useParams } from 'react-router-dom';

function Currency() {
  const { currencyCode } = useParams();

  return <h3 style={{
    fontSize: '1.5rem',
    fontWeight: 500,
    margin: '2rem 0',
  }}>Devise ${currencyCode}</h3>
}

export default Currency;
