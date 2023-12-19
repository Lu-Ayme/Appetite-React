import React from "react";
import Banner from "../assets/images/banner.png"

function Presentacion() {
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: "40rem" }}
                                src={Banner}
                                alt=" Star Wars - Mandalorian "
                            />
                        </div>
                        <p>
                        Appetite es una plataforma digital que te ofrece una gran variedad de platos de comida rápida, desde opciones personalizadas hasta combos y menús del día. Puedes pedir tu comida con solo unos clics y recibirla en tu casa en poco tiempo. Appetite se inspira en los mejores del rubro, pero también tiene su propia identidad y valor agregado.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Presentacion