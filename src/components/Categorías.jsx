import React from "react";
import '../assets/css/app.css'

import { useEffect, useState } from 'react'


function Categorias() {

  const [listMovies, setlistMovies] = useState([]);
  useEffect(() => {
    const traedata = async () => {
      const response = await fetch('http://localhost:3030/api/products')
      const data = await response.json()
      setlistMovies(data.countByCategory)
    }
    traedata()
  }, []);
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Categorías
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Pizzas
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Hamburguesas
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Bebidas
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Snacks
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Panchos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Vendidos por categoría
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
            <div class="col-lg-6 mb-4">
                <div class="card bg-dark text-white shadow">
                  <div class="card-body">
                    Pizzas: {listMovies.pizzas}
                    <br />
                    Hamburguesas: {listMovies.hamburguesas}
                    <br />
                    Snacks: {listMovies.acompañamientos}
                    <br />
                    Panchos: {listMovies.panchos}
                    <br />
                    Bebidas: {listMovies.bebidas}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Categorias