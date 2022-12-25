import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/components/Navbar.module.scss'
import Link from 'node_modules/next/link'

function Navbar (props) {
  const { menu } = props

  console.log('menu', menu)

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {menu.map((item) => (
          <li key={item._id}>
            <Link href='/cricketnews'>{item.sTitle}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Navbar.propTypes = {
  menu: PropTypes.array
}

export default Navbar
