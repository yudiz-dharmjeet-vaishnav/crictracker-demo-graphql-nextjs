import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/components/ArticleList.module.scss'

function ArticleList (props) {
  const { homePageArticleData } = props

  const [data, setData] = useState([])

  useEffect(() => {
    setData(homePageArticleData?.aResults)
  }, [])

  console.log('data', data)

  return (
    <div className={styles.articleList}>
      <h1>ArticleList</h1>
    </div>
  )
}

ArticleList.propTypes = {
  homePageArticleData: PropTypes.object
}

export default ArticleList
