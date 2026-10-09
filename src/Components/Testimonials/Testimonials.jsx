import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/white next arrow.png'
import back_icon from '../../assets/white back arrow.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user4.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
  const slideForward = ()=>{
    if(tx>-50){
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = ()=>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
  }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>William Jackson 1</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <p>Choosing to pursue my degree at Edusity was one of the 
                  best decisiion i've ever made. The supportive community,
                  state-of-art faacilities, and commitment to academic excellence
                  have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William Jackson 2</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <p>Choosing to pursue my degree at Edusity was one of the 
                  best decisiion i've ever made. The supportive community,
                  state-of-art faacilities, and commitment to academic excellence
                  have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>William Jackson 3</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <p>Choosing to pursue my degree at Edusity was one of the 
                  best decisiion i've ever made. The supportive community,
                  state-of-art faacilities, and commitment to academic excellence
                  have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>William Jackson 4</h3>
                    <span>Educity, USA</span>
                  </div>
                </div>

                <p>Choosing to pursue my degree at Edusity was one of the 
                  best decisiion i've ever made. The supportive community,
                  state-of-art faacilities, and commitment to academic excellence
                  have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
