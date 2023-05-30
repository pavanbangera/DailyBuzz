import React, { Component } from 'react'
import Spinner from './spinner.gif'

export default class SpinnerBar extends Component {
    render () {
        return (
            <div className='text-center'>
                <img src={Spinner} alt="loading" />
            </div>
        )
    }
}
