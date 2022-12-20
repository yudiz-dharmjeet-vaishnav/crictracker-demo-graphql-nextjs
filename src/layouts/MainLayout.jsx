import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '@components/Navbar'

function MainLayout ({ children, menu }) {
  return (
    <>
      <Navbar menu={menu} />
      {children}
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object,
  menu: PropTypes.array
}

export default MainLayout
