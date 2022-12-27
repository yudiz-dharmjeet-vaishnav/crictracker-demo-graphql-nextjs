import React from 'react'
import PropTypes from 'prop-types'

function Footer (props) {
  const { footerData } = props

  console.log('footerData', footerData)

  return (
    <div>Footer</div>
  )
}

Footer.propTypes = {
  footerData: PropTypes.array
}

export default Footer
