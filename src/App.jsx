import './App.css'

import RenderingKeys from './components/renderingkeys'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
function App() {

  return (
    <>
      <RenderingKeys/>
      <ConditionalRender/>
      <ShowUserName name='Abraao'/>
      <CarDetails brand={'Ford'} km={100} color={'vermelho'}/>
    </>
  )
}

export default App
