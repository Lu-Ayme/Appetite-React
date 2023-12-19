import React from "react";
import CajitasPequeñas from "./CajitasPequeñas";
import '../assets/css/app.css'
import { useEffect, useState } from 'react'


function ContentRowMovies() {

    const [listMovies, setlistMovies] = useState([]);
  useEffect(() => {
    const traedata = async () => {
      const response = await fetch('http://localhost:3030/api/products')
      const data = await response.json()
      setlistMovies(data.count)
    }
    traedata()
  }, []);

    /* <!-- Movies in DB --> */

    let moviesInDB = {
        title: 'Nuestros productos',
        color: 'primary',
        cuantity: listMovies,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total awards --> */

    const [listusers, setlistusers] = useState([]);
    useEffect(() => {
      const traedata = async () => {
        const response = await fetch('http://localhost:3030/api/users')
        const data = await response.json()
        setlistusers(data.count)
      }
      traedata()
    }, []);
  

    let totalAwards = {
        title: 'Usuarios registrados',
        color: 'success',
        cuantity: listusers,
        icon: 'fa-award'
    }

    /* <!-- Actors quantity --> */

    let actorsQuantity = {
        title: 'Total de categorías',
        color: 'warning',
        cuantity: '5',
        icon: 'fa-user-check'
    }

    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    return (
        <>
            <div className="row">

                {cartProps.map((movie, i) => {

                    return < CajitasPequeñas {...movie} key={i} />

                })}

            </div>

        </>
    )
}

export default ContentRowMovies