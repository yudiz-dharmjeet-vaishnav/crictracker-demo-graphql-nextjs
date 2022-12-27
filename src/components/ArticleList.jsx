import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { BsCalendarEvent, BsStopwatch } from 'react-icons/bs'

import styles from '@styles/components/ArticleList.module.scss'
import moment from 'node_modules/moment/moment'

function ArticleList (props) {
  const { homePageArticleData } = props

  const preSignedUrl = 'https://crictracker-admin-panel-local-dev-08032022.s3.ap-south-1.amazonaws.com/'

  const [data, setData] = useState([])

  useEffect(() => {
    setData(homePageArticleData?.aResults)
  }, [])

  return (
    <div className={styles.articleList}>
      {data.map((item, index) => (
        <div key={index} className={styles.article}>
          <h2 className={styles.articleCategory}>{item.sName}</h2>
          <hr />
          {item.aArticle.map((article) => (
            <Fragment key={article._id}>
              {article.sType === 'nBig' && (
                <div className={styles.big_article}>
                  <Image src={`${preSignedUrl}${article.oImg.sUrl}`} alt={article.oImg.sText} width={400} height={400} />
                  <h2>{article.sSrtTitle}</h2>
                  <div className={styles.date}>
                    <BsCalendarEvent />
                    <h4>{moment(article.dPublishDisplayDate).format('ll')}</h4>
                    <BsStopwatch />
                    <h4>{article.nDuration} Min</h4>
                  </div>
                </div>
              )}

              {article.sType === 'nSmall' && (
                <div className={styles.small_article}>
                  <Image src={`${preSignedUrl}${article.oImg.sUrl}`} alt={article.oImg.sText} width={100} height={100} />
                  <div className={styles.small_article_right}>
                    <h2>{article.sSrtTitle}</h2>
                    <div className={styles.date}>
                      <BsCalendarEvent />
                      <h4>{moment(article.dPublishDisplayDate).format('ll')}</h4>
                      <BsStopwatch />
                      <h4>{article.nDuration} Min</h4>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

ArticleList.propTypes = {
  homePageArticleData: PropTypes.object
}

export default ArticleList
