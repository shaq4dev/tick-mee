import React from 'react'
import styles from '../modules/heading.module.css'
import Tick from '../images/tick.png'

const Heading = ({ title }) => {
  return (
    <div className={styles.logoMerge}>
      <img src={Tick} alt="tickLogo" width={120} className={styles.logo}/>
      <h1 className={styles.head_style}>{title}</h1>
    </div>
  )
}

export default Heading
