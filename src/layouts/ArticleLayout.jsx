import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/layouts/ArticleLayout.module.scss'

function ArticleLayout ({ children }) {
  return (
    <div className={styles.ArticleLayout}>
      <div className={styles.HomeArticleSection}>
        {children}
      </div>
      <div className={styles.Sidebar}>
        <h2>Sidebar</h2>
      </div>
    </div>
  )
}

ArticleLayout.propTypes = {
  children: PropTypes.object
}

export default ArticleLayout
