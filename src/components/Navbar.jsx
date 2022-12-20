import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/components/Navbar.module.scss'

function Navbar (props) {
  const { menu } = props

  console.log('menu', menu)

  return (
    <div className={styles.navbar}>
      <ul>
        {menu.map((item) => (
          <li key={item._id}>{item.sTitle}</li>
        ))}
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  menu: PropTypes.array
}

export default Navbar
