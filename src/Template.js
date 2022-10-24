import React from 'react'
import Header from './Header'

const Template = ({ children, title }) => {
    return (
        <>
        <header title={title} />
        {children}
        </>
    )
}

export default Template