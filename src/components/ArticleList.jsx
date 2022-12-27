import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { BsCalendarEvent, BsStopwatch } from 'react-icons/bs'

import styles from '@styles/components/ArticleList.module.scss'

function ArticleList (props) {
  const { homePageArticleData } = props

  const preSignedUrl = 'https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/'

  const [data, setData] = useState([])

  useEffect(() => {
    setData(homePageArticleData?.aResults)
  }, [])

  console.log('data', data)

  return (
    <div className={styles.articleList}>
      {data.map((item, index) => (
        <Fragment key={index}>
          <h2 className={styles.articleCategory}>{item.sName}</h2>
          <hr />
          {item.aArticle.map((article) => (
            <Fragment key={article._id}>
              {article.sType === 'nBig' && (
                <div className={styles.big_article}>
                  <Image src={`${preSignedUrl}${article.oImg.sUrl}`} width={400} height={400} />
                  <h2>{article.sSrtTitle}</h2>
                  <div className={styles.date}>
                    <BsCalendarEvent />
                    <h4>{article.dPublishDisplayDate}</h4>
                    <BsStopwatch />
                    <h4>{article.nDuration} Min</h4>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

ArticleList.propTypes = {
  homePageArticleData: PropTypes.object
}

export default ArticleList
