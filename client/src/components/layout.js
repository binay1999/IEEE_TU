import React from 'react'
import Header from './partials/header'
import Footer from './partials/footer'

const Layout = (props) => {
    return(
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout