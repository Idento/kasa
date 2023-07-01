import React, {useRef, useState } from 'react'
import './styles/deployer.scss'
import arrow from '../assets/arrow.png'

export default function Deployer({title, text, k}) {
   const [status, setStatus] = useState()
    const textcontent = useRef(null);

    function deploy(e) {
      setStatus((status) => !status)
      textcontent.current.classList.toggle('test')
      console.log(textcontent.current.classList);
    }

  return (
    <div className= {'deployer' + window.location.pathname.replace("/", "")} key={k + "deployer"}>
        <div className={!status ? 'deployer__controller__up rotate' : 'deployer__controller__down rotate'} key={k + "dc"}>
            <h2 key={k + "h2"}>{title}</h2>
            <img src={arrow} className='arrow' alt='arrow controller' onClick={deploy} key={k + "img"}/>
        </div>
        <div className={'deployer__textcontent'} ref={textcontent} key={k + "textcontent"}>
            <p key={k + "p"}>
              {text}
            </p>
        </div>
    </div>
  )
}
