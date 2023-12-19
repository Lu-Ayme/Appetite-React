import React from "react";
import ChartRow from "./ChartRow";
import { useEffect, useState } from 'react'


function Chart() {

{/*componentDidMount=useState(() => {
		fetch('http://localhost:3030/api/products')
			.then((res) => {
				return (res.json())
			})
			.then((data) => {
				console.log(data.products)
			})
	}, [])
*/}

  const [listMovies, setlistMovies] = useState([]);
  useEffect(() => {
    const traedata = async () => {
      const response = await fetch('http://localhost:3030/api/products')
      const data = await response.json()
      setlistMovies(data.product)
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
              
              { listMovies.map((row, i) => {
                  return <ChartRow {...row} key={i} />
                })}  
              

            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Chart;