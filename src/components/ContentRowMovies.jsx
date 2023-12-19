import React from "react";
import CajitasPequeñas from "./CajitasPequeñas";
import '../assets/css/app.css'

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Nuestros productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Usuarios registrados', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Puntuación' ,
    color:'warning',
    cuantity:'★★★★★',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies() {
	return (
		<>
			<div className="row">
            
            {cartProps.map( (movie, i) => {

                return < CajitasPequeñas {...movie} key={i}/>
            
            })}

        </div>

		</>
	)
}

export default ContentRowMovies