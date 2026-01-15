import './App.css'
import InputValueString from './components/InputValueString'

function App() {


  return (
    <>
      <InputValueString label="nom" />
      <InputValueString label="mot de pass" type='password' classParent='flex flex-row' />
      <InputValueString label="confirmation de mot de pass" type='password' />
    </>
  )
}

export default App
