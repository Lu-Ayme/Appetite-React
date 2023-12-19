import React from 'react';
import Presentacion from './Presentacion';
import Categorias from './Categorías';

function ContentRowCenter() {
    return (
        <>

            <div className="row">
                <Presentacion />
                <Categorias />
            </div>
        </>

    )
}

export default ContentRowCenter;