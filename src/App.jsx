import './App.css'

import RenderingKeys from './components/renderingkeys'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'

{/* Renderizando listas com componentes */}
const cars = [
  {id: 1, brand: 'Ford', km: 100, color: 'vermelho'},
  {id: 2, brand: 'BMW', km: 200, color: 'azul'},
  {id: 3, brand: 'Audi', km: 300, color: 'verde'},
  {id: 4, brand: 'VW', km: 400, color: 'amarelo'},
  {id: 5, brand: 'Renault', km: 500, color: 'vermelho'},
]
function App() {

  return (
    <>
      <RenderingKeys/>
      <ConditionalRender/>
      <ShowUserName name='Abraao'/>
      <CarDetails brand={'Ford'} km={100} color={'vermelho'}/>

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}

      {/* Children prop */}
      <Container>
        <h2>Teste</h2>
        <div>
          Meu container children
        </div>
      </Container>
    </>
  )
}

export default App
