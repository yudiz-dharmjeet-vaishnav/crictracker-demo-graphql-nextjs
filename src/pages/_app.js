import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import PropTypes from 'prop-types'

import '@styles/globals.scss'
import MainLayout from 'src/layouts/MainLayout'
import client from '@configs/apollo-client'
import { GET_FRONT_FOOTER, GET_MENU_TREE } from '@graphql/home/home.query'

export default function MyApp ({ Component, pageProps, menu, footerData }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout menu={menu} footerData={footerData}>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  const { data } = await client.query({
    query: GET_MENU_TREE
  })

  const { data: footerData } = await client.query({
    query: GET_FRONT_FOOTER
  })

  return { ...appProps, menu: data.getMenuTree.aResults, footerData: footerData.getFrontFooter }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  menu: PropTypes.array,
  footerData: PropTypes.array
}
