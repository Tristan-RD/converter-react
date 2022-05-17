import './Header.css';

function Header({ amount, setAmount }) {
  return (
    <header className='header'>
      <h1>Converter</h1>

      <p>
        <input
          className="header__input"
          type="number"
          min="1"
          value={amount}
          onChange={setAmount}
        />
        euro{amount > 1 ? 's' : ''}
      </p>
    </header>
  );
}

export default Header;
