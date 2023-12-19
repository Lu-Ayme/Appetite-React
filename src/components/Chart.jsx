import React from "react";
import ChartRow from "./ChartRow";
import { useEffect, useState } from 'react'

let tableRowsData = [
  {
      Title: 'Billy Elliot ',
      Length: '123',
      Rating: '5',
      Categories: ['Drama','Comedia'],
      Awards: 2
  },
  {
      Title: 'Alicia en el país de las maravillas',
      Length: '142',
      Rating: '4.8',
      Categories: ['Drama','Acción','Comedia'],
      Awards: 3
  },
  
]

function Chart() {

  const [listMovies, setlistMovies] = useState([]);
  useEffect(() => {
    const traedata = async () => {
      const response = await fetch('http://localhost:3030/api/products')
      const data = await response.json()
      setlistMovies(data.data)
    }
    traedata()
  }, []);



  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Categorías</th>
              </tr>
            </thead>
            <tbody>
              {
                listMovies.map((row, i) => {
                  return <ChartRow {...row} key={i} />
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Chart;