import { Link, Outlet } from "react-router-dom";

function CurrenciesList() {
  const currencies = [
    {description: 'United Arab Emirates Dirham', code: 'AED'},
    {description: 'Afghan Afghani', code: 'AFN'},
    {description: 'Albanian Lek', code: 'ALL'},
  ];

  return (
    <div className='currencies-list'>
      <main className='main'>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 500,
          margin: '2rem 0',
        }}>Liste des devises disponibles</h2>

        <nav>
          {currencies.map((currency) =>(
            <Link
              to={`/currencies/${currency.code}`}
              key={currency.code}
              style={{ display: 'block' }}
            >
              {currency.description}
            </Link>
          ))}
        </nav>

        <Outlet />
      </main>
    </div>
  );
}

export default CurrenciesList;