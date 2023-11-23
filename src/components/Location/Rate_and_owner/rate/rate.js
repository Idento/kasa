import React from 'react'
import { ReactComponent as Star } from '../../../assets/star-solid.svg'
import './styles/rate.scss'

export default function Rate({ rate }) {
  return <Star className={rate} />
}
