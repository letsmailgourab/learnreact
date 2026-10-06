import './App.css'
import Card from './Components/Card.jsx'
function App() {
  return (
    <>
      <div className="flex justify-center p-8 gap-2">
        <Card tittle="Lava" buttonn="See Now" />
        <Card tittle="Tinchuley" />
        <Card />
      </div>
    </>
  )
}

export default App