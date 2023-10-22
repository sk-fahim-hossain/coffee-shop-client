import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  return (
    <div className="p-36">
      <h2 className='text-center text-4xl my-6'>Hot Coffee :{coffees.length}</h2>
      <div className='grid grid-cols-2 gap-4'>
    {
      coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
    }
      </div>
    </div>
  )
}

export default App
