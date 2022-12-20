import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/client'
import PropTypes from 'prop-types'

import '@styles/globals.scss'
import MainLayout from 'src/layouts/MainLayout'
import client from '@configs/apollo-client'
import { GET_MENU_TREE } from '@graphql/home/home.query'

export default function MyApp ({ Component, pageProps, menu }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout menu={menu}>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  menu: PropTypes.array
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const { data } = await client.query({
    query: GET_MENU_TREE
  })

  return { ...appProps, menu: data.getMenuTree.aResults }
}
