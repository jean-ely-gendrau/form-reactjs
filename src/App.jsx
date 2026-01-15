import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'

function App() {
  const [nom, setNom] = useState("");

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    //Empêche le comportement par défaut du formulaire
    e.preventDefault();

    // Affiche dans la console les données saisies par l'utilisateur
    // Ces valeurs proviennent généralement du state (useState)
    console.log({
      nom: nom
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="nom"
          onChange={(e) => setNom(e.target.value)}
          value={nom}
        />

        <button type="submit">Evoyer</button>
      </form>
    </>
  )
}

export default App
