import React from 'react'
import './Ready.css'
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator'
const Ready = () => {
  return (
    <section className='ready'>
        <h1>Are You <div><GlitchAnimator text={"Ready"} styles =  {{fontSize: "5rem"}} /></div> for this?</h1>
    </section>
  )
}

export default Ready