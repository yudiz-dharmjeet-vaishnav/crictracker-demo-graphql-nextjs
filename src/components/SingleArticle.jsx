import React from 'react'
import PropTypes from 'prop-types'

function SingleArticle (props) {
  const { articleData } = props

  console.log('articleData', articleData)

  return (
    <div>SingleArticle</div>
  )
}

SingleArticle.propTypes = {
  articleData: PropTypes.object
}

export default SingleArticle
