import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const SectionWrap = ({children}) => {
  return (
    <section className="content">
      <div className="cont_wrap">
        {children}
      </div>
    </section>
    )
}

SectionWrap.prototype = {children: PropTypes.any.isRequired}
export default SectionWrap
