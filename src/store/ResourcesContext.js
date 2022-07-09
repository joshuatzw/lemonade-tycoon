import { createContext, useState } from 'react' 

export const ResourcesContext = createContext({
  lemons: 0,
  sugar: 0,
  ice: 0,
  lemonades: 0,
  money: 0,
  addLemons: (()=> null),
  addSugar: (()=>null),
  addIce: (()=>null),
  makeLemonade: (()=> null),
  sellLemonade: (()=>null),
  targetLemons: 0,
  targetSugar: 0,
  targetIce: 0,
  moreTargetLemons: (()=>null),
  lessTargetLemons: (()=>null),
  moreTargetSugar: (()=>null),
  lessTargetSugar: (()=>null),
  moreTargetIce: (()=>null),
  lessTargetIce: (()=>null),
  attractiveness: 0

})  

export default function Resources(props) {
  const [userLemons, setUserLemons] = useState(0)
  const [userSugar, setUserSugar] = useState(0)
  const [userIce, setUserIce] = useState(0)
  const [userLemonades, setUserLemonades] = useState(2)
  const [userMoney, setUserMoney] = useState(50)
  const [targetLemons, setTargetLemons] = useState(0)
  const [targetSugar, setTargetSugar] = useState(0)
  const [targetIce, setTargetIce] = useState(0)
  const [attractiveness, setAttractiveness] = useState(0)

  const cost = {
    lemons: 1,
    sugar: 1,
    ice: 0.5,
  }

  const context = {
    lemons: userLemons,
    sugar: userSugar,
    ice: userIce,
    lemonades: userLemonades,
    money: userMoney,
    addLemons: addLemons,
    addSugar: addSugar,
    addIce: addIce,
    makeLemonade: makeLemonade,
    sellLemonade: sellLemonade,

    targetLemons: targetLemons,
    targetSugar: targetSugar,
    targetIce: targetIce,
    moreTargetLemons: moreTargetLemons,
    lessTargetLemons: lessTargetLemons,
    moreTargetSugar: moreTargetSugar,
    lessTargetSugar: lessTargetSugar,
    moreTargetIce: moreTargetIce,
    lessTargetIce: lessTargetIce,
    attractiveness: attractiveness

  }


  // BUYING INGREDIENTS: 
  function addLemons() {
    if (userMoney - cost.lemons >= 0) {
      setUserMoney(userMoney - cost.lemons)
      setUserLemons(userLemons + 1)
    } else {
      return null
    }    
  }

  function addSugar() {
    if (userMoney - cost.sugar >= 0) {
      setUserMoney(userMoney - cost.sugar)
      setUserSugar(userSugar + 1)
    } else {
      return null
    }    
  }

  function addIce() {
    if (userMoney - cost.ice >= 0) {
      setUserMoney(userMoney - cost.ice)
      setUserIce(userIce + 1)
    } else {
      return null
    }    
  }


  // MAKING LEMONADE: 

  function moreTargetLemons() {
    setTargetLemons(targetLemons + 1)
  }
  function lessTargetLemons() {
    if (targetLemons > 0) {
      setTargetLemons(targetLemons - 1)
    } else {
      return null
    }
  }

  function moreTargetSugar() {
    setTargetSugar(targetSugar + 1)
  }
  function lessTargetSugar() {
    if (targetSugar > 0) {
      setTargetSugar(targetSugar - 1)
    } else {
      return null
    }
  }

  function moreTargetIce() {
    setTargetIce(targetIce + 1)
  }
  function lessTargetIce() {
    if (targetIce > 0) {
      setTargetIce(targetIce - 1)
    } else {
      return null
    }
  }

  function makeLemonade() {
    if (userLemons - targetLemons >= 0){
      if(userSugar - targetSugar >= 0){
        if(userIce - targetIce >= 0){
          setUserLemons(userLemons - targetLemons)
          setUserSugar(userSugar - targetSugar)
          setUserIce(userIce - targetIce)
          setUserLemonades(userLemonades + 1)
          const lemonAttractiveness = targetLemons * 10
          const sugarAttractiveness = targetSugar * 8
          const iceAttractiveness = targetIce * 5
          setAttractiveness(lemonAttractiveness + sugarAttractiveness + iceAttractiveness)
        } else {return null}
      } else {return null}
    } else {return null}
  }


  function sellLemonade() {
    if (userLemonades >= 1) {
      setUserLemonades(userLemonades - 1)
      setUserMoney(userMoney + 2)
      console.log("sold!")
    } else {
      return null
    }
  }

  return (
    <ResourcesContext.Provider value={context}>
      {props.children}
    </ResourcesContext.Provider>)
}

