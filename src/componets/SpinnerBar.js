import React from 'react'
import Spinner from './spinner.gif'

export default function pinnerBar () {
    return (
        <div className='text-center'>
            <img src={Spinner} alt="loading" />
        </div>
    )
}
