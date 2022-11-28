import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check out these Epic DESTINATION</h1>
        <div className='cards__container'>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src="images/image-2.jpeg"
                        text ="Enjoy the company of tall trees and beautiful landscapes with the Bijli Mahadev trek."
                   label ='Trek'
                   path='/services'/>
                    <CardItem src="images/image-4.jpg"
                        text ="Winter adventure sports like skiing, parachuting, paragliding in Solang valley."
                   label ='Adventure'
                   path='/services'/>
                    <CardItem src="images/image-6.jpg"
                        text ="World's Longest Highway Tunnel above 10,000 Feet"
                   label ='Adventure'
                   path='/services'/>
                </ul>
                <ul className="cards__items">
                    <CardItem src="images/image-14.jpg"
                        text ="Sissu is a tiny beautiful hamlet in Himachal Pradesh."
                   label ='Trek'
                   path='/services'/>
                    <CardItem src="images/image-15.jpg"
                        text ="Spiti is a high-altitude region of the Himalayas"
                   label ='Adventure'
                   path='/services'/>
                    <CardItem src="images/image-16.jpg"
                        text ="Lahaul & Spiti is capable to transport one to another world where everything looks and feels magical."
                   label ='Adventure'
                   path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards