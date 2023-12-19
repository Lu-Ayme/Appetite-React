import React from 'react';
import Presentacion from './Presentacion';
import Categorias from './Categorías';

function ContentRowCenter() {
    return (
        <>
                <Presentacion />

            <div className="row">
                <Categorias />
            </div>
        </>

    )
}

export default ContentRowCenter;