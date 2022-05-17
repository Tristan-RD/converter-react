import './Toggler.css';
 
function Toggler({ toggle, isOpen }) {

    return(
        <button
        type='button'
        className={ isOpen ? 'toggler toggler--open' : 'toggler'}
        onClick={toggle}
      >
      =
    </button>
    );
}
export default Toggler;