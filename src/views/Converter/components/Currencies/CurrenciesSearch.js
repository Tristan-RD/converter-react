function CurrenciesSearch({ query, setQuery }) {
  // Champ de recherche
  // Pour récupérer la saisie de l'utilisateur, on a pas accès au DOM réel,
  // c'est là qu'intervient le principe de composant contrôlé.
  // On va ajouter un évènement sur le champs (ici onChange) ainsi qu'une valeur (value):
  // (voir ViewModel pour la gestion de la variable d'état `query`)
  return (
    <input
      className='currencies__search'
      placeholder='Rechercher'
      value={query}
      onChange={setQuery}
    />
  );
}

export default CurrenciesSearch;
