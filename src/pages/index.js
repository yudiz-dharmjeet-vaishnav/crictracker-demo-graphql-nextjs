import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/pages/Home.module.css'
import client from '@configs/apollo-client'
import { GET_MENU_TREE } from '@graphql/home/home.query'

export default function Home (props) {
  const { menu } = props

  console.log('menu', menu)

  return (
    <div className={styles.container}>
      <h1>Hello</h1>
    </div>
  )
}

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_MENU_TREE
  })

  return {
    props: {
      menu: data.getMenuTree.aResults
    }
  }
}

Home.propTypes = {
  menu: PropTypes.array
}
