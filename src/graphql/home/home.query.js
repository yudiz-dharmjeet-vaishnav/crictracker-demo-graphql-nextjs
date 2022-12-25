import { gql } from '@apollo/client'

export const GET_MENU_TREE = gql`
  query GetMenuTree {
    getMenuTree {
      aResults {
        _id
        eStatus
        sTitle
      }
    }
  }
`

export const GET_HOME_PAGE_ARTICLE = gql`
  query GetHomePageArticle {
    getHomePageArticle {
      nTotal
      aResults {
        sName
        aArticle {
          _id
          sTitle
          sSubtitle
          sSrtTitle
          oImg {
            sText
            sUrl
          }
          dPublishDate
          dPublishDisplayDate
          nDuration
          sDescription
          sType
        }
      }
    }
  }
`
