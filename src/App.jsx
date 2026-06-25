import { useEffect, useState } from 'react'
import Cards from './components/Cards';
import Navbar from './components/Navbar';



function App() {
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setFetchedData(data)  

    }
    fetchData();
  }, []);

  //make Card component in differnt file. cause if you create ti here then on every render this component will created again.
  // const Cards = ({ card }) => {
  //   return (<div className="card">
  //     <span>{card.userId}</span>
  //     <span>{card.id}</span>
  //     <h2>{card.title}</h2>
  //     <p>{card.body}</p>
  //   </div>)
  // }

  return (
    <>
      <Navbar/>
      <div className="Box bg-green-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {fetchedData.map((card)=>{
          return <Cards key={card.id} card={card}/>
        })}
      </div>
    </>
  )
}

export default App
