import React from "react";
import '../../App.css';
import CardItem from "../CardItem";
import '../Cards.css';
import Footer from "../Footer";

export default function Destinations(){
    return(
        <>

   
        <h1 className="destinations">Destinations</h1>
        <ul className="cards__items">
        <CardItem src="images/image-1.png"
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

                  <Footer/>
        </>

    )
}