import { gql } from '@apollo/client'

export const GET_MENU_TREE = gql`
  query GetMenuTree {
    getMenuTree {
      aResults {
        _id
        bIsMulti
        eMenuType
        eStatus
        sTitle
        sUrl
      }
    }
  }
`
