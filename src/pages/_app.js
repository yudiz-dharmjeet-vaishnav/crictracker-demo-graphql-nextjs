import React from 'react'
import { ApolloProvider } from '@apollo/client'
import PropTypes from 'prop-types'

import client from '../config/apollo-client'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object
}

export default MyApp
