import './App.css'

import RenderingKeys from './components/renderingkeys'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
function App() {

  return (
    <>
      <RenderingKeys/>
      <ConditionalRender/>
      <ShowUserName name='Abraao'/>
    </>
  )
}

export default App
