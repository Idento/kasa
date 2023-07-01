import React from 'react'
import Boxtitle from '../Imagebox/boxtitle'
import Deployer from '../deployer/deployer'
import about from "../../data/about.json"


export default function About() {
  return (
    <div>
      <Boxtitle />
      {about.map((value, key)=> {
        console.log(value);
        return <Deployer title={value.title} text={value.text} k={key}/>
      })}
    </div>
  )
}

