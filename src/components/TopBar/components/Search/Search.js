import React from 'react'
import PropTypes from 'prop-types'

import styles from './Search.module.scss'

class Search extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })

    this.props.filterNotesFn(e.target.value)
  }

  handleClearInput = () => {
    this.setState({
      value: ''
    })
    this.props.filterNotesFn('')
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
          value={this.state.value}
        />
        {
          this.state.value !== '' &&
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
  filterNotesFn: PropTypes.func.isRequired
}

export default Search
