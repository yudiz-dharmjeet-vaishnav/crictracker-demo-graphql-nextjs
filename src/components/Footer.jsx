import React from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/components/Footer.module.scss'

function Footer (props) {
  const { footerData } = props

  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          {footerData.map((item, index) => (
            <div key={index} className={styles.footerItem}>
              <h2>{item.eType}</h2>
              <hr />
              <ul>
                {item.aResults.map((item) => (
                  <li key={item._id}>{item.sTitle}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {
  footerData: PropTypes.array
}

export default Footer
