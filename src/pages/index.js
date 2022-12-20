import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/pages/Home.module.scss'

export default function Home () {
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  )
}

Home.propTypes = {
  menu: PropTypes.array
}
