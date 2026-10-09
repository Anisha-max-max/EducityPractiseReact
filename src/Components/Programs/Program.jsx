import React from 'react'
import'./Program.css'
import Program1 from '../../assets/program1.jpg'
import Program2 from '../../assets/program1.jpg'
import Program4 from '../../assets/program4.jpg'
import icon from '../../assets/program icon.png'
import icon1 from '../../assets/Program icon 1.jpg'
import icon2 from '../../assets/Program icon2.jpg'

const Program = () => {
  return (
    <div className='Programs' div id="program"> 
      <div className="Program">
        <img src={Program1} alt="" />

        <div className="caption">
          <img src={icon} alt=""/>
          <p>Graduation Degree</p>
        </div>

      </div>

     < div className="Program">
        <img src={Program2} alt="" />
         <div className="caption">
          <img src={icon1} alt=""/>
          <p>Masters Degree</p>

      </div>
      </div>

      <div className="Program">
        <img src={Program4} alt="" />
        <div className="caption">
          <img src={icon2} alt=""/>
          <p>Post Graduation </p>
        </div>
      
  </div>
  </div>
  )
}

export default Program
