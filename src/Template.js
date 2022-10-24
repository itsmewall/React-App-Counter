import React from 'react'
import Nav from './Nav'
import Header from './Header'

const Template = ({ children, pages, activePage, onChangePage }) => {
    const title = pages[activePage].text
    
    return (
        <>
        <Header title={title} />
        <Nav pages={pages} onChangePage={onChangePage}/>
        {children}
        </>
    )
}

export default Template