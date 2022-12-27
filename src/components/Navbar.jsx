import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'

import styles from '@styles/components/Navbar.module.scss'
import logo from '@assets/images/crictrackerlogo.svg'

function Navbar (props) {
  const { menu } = props

  return (
    <div className={styles.header}>
      <div className={styles.navbar1}>
          <div className={styles.navbar1_left}>
            <Link href='/'>
              <Image className={styles.logo} src={logo} width={200} alt='Logo' />
            </Link>
          </div>
          <div className={styles.navbar1_right}>
            <button>Sign In</button>
            <BiSearchAlt className={styles.icon} size={30} />
            <div className={styles.divider}></div>
            <AiOutlineMenu className={styles.icon} size={26} />
          </div>
      </div>
      <div className={styles.navbar2}>
          <ul>
            {menu.map((item) => (
              <li key={item._id}>
                <Link href='/'>{item.sTitle}</Link>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  menu: PropTypes.array
}

export default Navbar
