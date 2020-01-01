import React from 'react'
import PropTypes from 'prop-types'

import styles from './Search.module.scss'

class Search extends React.Component {
  handleChange = (e) => {
    this.props.searchNotesFn(e.target.value)
  }

  handleClearInput = () => {
    this.props.searchNotesFn('')
  }

  render () {
    return (
      <div className={styles.search}>
        <div className={styles.icon}>
          <i className='fa fa-search' />
        </div>
        <input
          className={styles.input}
          type='text'
          placeholder='Search'
          onChange={this.handleChange}
          value={this.props.searchPhrase}
        />
        {
          this.props.searchPhrase !== '' &&
            <i
              onClick={this.handleClearInput}
              className={`${styles.inputReset} fas fa-times-circle`}
            />
        }
      </div>
    )
  }
}

Search.propTypes = {
  searchNotesFn: PropTypes.func.isRequired,
  searchPhrase: PropTypes.string.isRequired
}

export default Search
