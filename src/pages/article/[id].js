import React from 'react'
import PropTypes from 'prop-types'

import SingleArticle from '@components/SingleArticle'
import ArticleLayout from '@layouts/ArticleLayout'
import client from '@configs/apollo-client'
import { GET_ARTICLE_FRONT } from '@graphql/article/article.query'

function Article ({ articleData }) {
  return (
    <ArticleLayout>
      <SingleArticle articleData={articleData} />
    </ArticleLayout>
  )
}

export async function getServerSideProps (context) {
  const id = context.query.id
  const { data } = await client.query({
    query: GET_ARTICLE_FRONT,
    variables: {
      input: {
        _id: id
      }
    }
  })

  return {
    props: { articleData: data.getArticleFront }
  }
}

Article.propTypes = {
  articleData: PropTypes.object
}

export default Article
