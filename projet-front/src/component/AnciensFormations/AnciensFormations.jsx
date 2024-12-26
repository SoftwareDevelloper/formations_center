import React from 'react'
import '../AnciensFormations/AnciensFormations.css'
import mean from '../AnciensFormations/mean stack.png'
import mern from '../AnciensFormations/mern stack.png'
const AnciensFormations = () => {
  return (
    <div className='AnciensForamtions'>
        <h1 className="Title">Les Ancienne Formations</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 img">
            <img src={mean} alt="" className='h-auto max-w-full rounded-lg img1' />
            <img src={mern} alt="" className='h-auto max-w-full rounded-lg img2'/>
        </div>
      
    </div>
  )
}

export default AnciensFormations
