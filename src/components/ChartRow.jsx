import React from 'react';
import PropTypes from 'prop-types';

function ChartRow(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.categories}</td>
            <td>
                <ul>
                  {/*<li>{props.categories?.name || 'No tiene categoría' }</li> */}  
                </ul>
            </td>
        </tr>
    )
}

ChartRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    categories: PropTypes.string
}


ChartRow.defaultProps = {
    id: 'X',
    name: 'Sin nombre',
    description: 'Sin descripción',
    categories: [],
}




export default ChartRow;