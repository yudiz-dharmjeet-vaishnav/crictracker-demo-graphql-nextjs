import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/pages/Home.module.scss'
import client from '@configs/apollo-client'
import { GET_HOME_PAGE_ARTICLE } from '@graphql/home/home.query'

export default function Home ({ homePageArticleData }) {
  console.log('homePageArticleData', homePageArticleData)

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  )
}

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_HOME_PAGE_ARTICLE
  })

  return {
    props: { homePageArticleData: data.getHomePageArticle }
  }
}

Home.propTypes = {
  menu: PropTypes.array,
  homePageArticleData: PropTypes.object
}
