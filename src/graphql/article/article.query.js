import { gql } from '@apollo/client'

export const GET_ARTICLE_FRONT = gql`
  query GetArticleFront($input: oGetArticleInput) {
    getArticleFront(input: $input) {
      _id
      sTitle
      sSubtitle
      sContent
      dPublishDisplayDate
      oTImg {
        sUrl
        sText
      }
    }
  }
`
