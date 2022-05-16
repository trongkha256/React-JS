import React from 'react'
import Header from './header'
import Content from './content'
import Slidebar from './slidebar'
import Footer from './footer'
import './home.css'
class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Header />
                <div className='row'>
                    <div className='col1'>
                        <div className='item'>
                            <Content />
                        </div>
                    </div>
                    <div className='col2'>
                        <div className='item'>
                            <Slidebar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Home