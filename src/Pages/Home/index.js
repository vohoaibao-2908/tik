import React, { Component } from 'react'
import CinemaBlock from '../../layout/CinemaBlock'
import FlimBlock from '../../layout/FilmBlock'
import Header from "../../layout/Header"
import HomeApp from '../../layout/HomeApp'
import NewBlock from '../../layout/NewsBlock'
import Footer from "../../layout/Footer"
class homeScreen extends Component {
    render() {
        return (
            <div className="Home">
                <Header />
                <FlimBlock/>
                <CinemaBlock />
                <NewBlock/>
                <HomeApp/>
                <Footer />
            </div>
        )
    }
}
export default homeScreen;