import React, { Children } from 'react'
import Contact from './Contact'
import Port from './Port'
import Site from './Site'
import Skill from './Skill'
import Intro from './Intro'



const Main = ({Children}) => {
  return (  
    <main id="main" role="main">
       {Children}
    </main>
  )
}

export default Main;