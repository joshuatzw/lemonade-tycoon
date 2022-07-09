import { useContext, useEffect, useState } from 'react'
import { ResourcesContext } from './store/ResourcesContext'

import './Main.css'


export default function Main() {

  const resources = useContext(ResourcesContext)
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [demand, setDemand] = useState(0)



  // using this to run the timer for when customers would consider buying lemonade.
  useEffect(()=>{
    function purchaseLemonade(attractiveness) {
      setDemand(86)
      if (attractiveness === demand ){
        resources.sellLemonade()
      }
    }

    const gameStartInterval = setInterval(()=>{
      let attractiveness = resources.attractiveness
      if (attractiveness > 86) {
        setMax(attractiveness)
        setMin(86)
      } else {
        setMax(86)
        setMin(attractiveness)
      }
      
      console.log(Math.floor(Math.random() * (max - min + 1)) + min)
      purchaseLemonade(Math.floor(Math.random() * (max - min + 1)) + min)
    }, 2000);
    return () => {
      clearInterval(gameStartInterval)
    }
  }, [resources, demand, max, min])



  return (
    <div className='main-div'>

      
      <h1> Lemonade Tycoon! </h1>
      <h2> Bank: ${resources.money} </h2> 
      
      <h2> Ingredients Available: </h2>
      
      <div className='ingredient'>
        <span className='ingredient-title'> 🍋 {resources.lemons} </span> 
        <button onClick={resources.addLemons}> + </button> 
      </div>

      <div className='ingredient'>
        <span className='ingredient-title'> 🍯 {resources.sugar}</span>
        <button onClick={resources.addSugar}> + </button> 
      </div>

      <div className='ingredient'>
        <span className='ingredient-title'> 🧊 {resources.ice}</span>
        <button onClick={resources.addIce}> + </button> 
      </div>

      <div className='ingredient'>
        <span className='ingredient-title'> 🥤 {resources.lemonades}</span>
      </div>
      

      <div className='proportions'>
        <h2> Proportions </h2>
        <h3> <button onClick={resources.lessTargetLemons}> - </button> <span> 🍋 {resources.targetLemons}</span> <button onClick={resources.moreTargetLemons}> + </button> </h3>
        <h3> <button onClick={resources.lessTargetSugar}> - </button> <span> 🍯 {resources.targetSugar}</span> <button onClick={resources.moreTargetSugar}> + </button> </h3>
        <h3> <button onClick={resources.lessTargetIce}> - </button> <span> 🧊 {resources.targetIce}</span> <button onClick={resources.moreTargetIce}> + </button> </h3>
      </div>
  

      <button onClick={resources.makeLemonade}> Make Lemonade! </button>
    </div>
  )
}