import React from "react";
import './styles/home.scss'
import BoxCard from "./card/BoxCard";
import Boxtitle from "../Imagebox/boxtitle";
import logement from '../../data/logements.json';




export const navlist = {
	"Accueil" : "/",
	"A propos" : "About",
}



function Home() {
	return (
		<div className='home'>
			<Boxtitle text="Chez vous, partout et ailleurs"/>
			<BoxCard data={logement}/>
		</div>
	)
}

export default Home