import React from 'react'
import office from '../NewFormations/Assest/Microsoft-Office-365-1 (1).png'
import englich from '../NewFormations/Assest/Reflex-English.png'
import springBoot from '../NewFormations/Assest/Spring boot.png'
import '../NewFormations/NewFormations.css'
const NewFormations = () => {
  return (
    <div className='NewFormations'>
        <h1 className="Title">Les Nouvelles Formations</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 imge">
            <img src={office} alt="" className='h-auto max-w-full rounded-lg img1' />
            <img src={englich} alt="" className='h-auto max-w-full rounded-lg '/>
            <img src={springBoot} alt="" className='h-auto max-w-full rounded-lg '/>

        </div>
        

      
    </div>
  )
}

export default NewFormations
