import React from 'react'
import { useQuery } from '@apollo/client'

import styles from '../styles/Home.module.css'
import { GET_MENU_TREE } from '../graphql/home/home.query'

export default function Home () {
  const { loading, error, data } = useQuery(GET_MENU_TREE)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log(data)

  return (
    <div className={styles.container}>
    </div>
  )
}
