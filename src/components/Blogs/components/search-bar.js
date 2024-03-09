import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../index.css'
import styles from './search-bar.module.css' 

const SearchBar = (props) => {
  return (
    <div className={styles['search-bar']}>
      <div className={styles['container']}>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className={` ${styles['textinput']} ${projectStyles['input']} `}
        />
        <button className={` ${styles['button']} ${projectStyles['button']} `}>
          {props.button}
        </button>
      </div>
    </div>
  )
}

SearchBar.defaultProps = {
  textinputPlaceholder: 'What are you looking for ?',
  button: "Search",
}

SearchBar.propTypes = {
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.string,
}

export default SearchBar
