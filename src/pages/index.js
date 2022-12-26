import React from 'react'
import PropTypes from 'prop-types'

import client from '@configs/apollo-client'
import { GET_HOME_PAGE_ARTICLE } from '@graphql/home/home.query'
import HomeLayout from '@layouts/HomeLayout'
import ArticleList from '@components/ArticleList'

export default function Home ({ homePageArticleData }) {
  return (
    <>
      <HomeLayout>
        <ArticleList homePageArticleData={homePageArticleData} />
      </HomeLayout>
    </>
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
