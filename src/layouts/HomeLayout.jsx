import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/layouts/HomeLayout.module.scss'

function HomeLayout ({ children }) {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.Sidebar}>
        <h2>Sidebar 1</h2>
      </div>
      <div className={styles.HomeArticleSection}>
        {children}
      </div>
      <div className={styles.Sidebar}>
        <h2>Sidebar 2</h2>
      </div>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.object,
  menu: PropTypes.array
}

export default HomeLayout
