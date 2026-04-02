import { Suspense } from 'react'
import './App.css';
import Countries from './components/countries/Countries';

function App() {

  return (
    <>
      <h1>React world on the go...</h1>
      <Suspense fallback={<h6>Loading...</h6>}>
        <Countries></Countries>
      </Suspense>
    </>
  )
}

export default App;
