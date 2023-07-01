import React, { useEffect, useState } from 'react'
import "./styles/BoxCard.scss";
import Card from './card';


export default function BoxCard({data}) {
  const [datas, setData] = useState()

  useEffect(() => {
    setData(data);
  }, [data])

  if (!datas){
    return null
  }

  
  return (
    <div className='box__card'>
        <div className='container__card'>
        {datas.map((value) => {
          console.log(datas);
          return <Card id={value.id} title={value.title} cover={value.cover}/>
        })}
        </div>
    </div>
  )
}
