import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        <ul>
          {this.props.sushi.map()}
        </ul>
        
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer