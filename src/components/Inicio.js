import React, { useEffect } from 'react'

export const Inicio = ({setNameActualState}) => {
    useEffect(()=>{
        setNameActualState("Inicio")
    })
    return (
        <div>
            <section className="principal">
                <article className="info">
                    <img className="info-image" src="img/sensacionesUnicas.jpg" alt="imagen sensaciones unicas" />
                    <div className="content">
                        <h2>Sensaciones Unicas</h2>
                        <p>En el <span>Wildlife Safari Club</span>, cada aventura despierta todos tus sentidos: desde el sonido de los
                            pájaros exóticos al amanecer hasta el encuentro cercano con los majestuosos "Cinco Grandes".
                            Siente
                            la brisa cálida de la sabana mientras contemplas los vibrantes atardeceres africanos y relájate
                            bajo
                            un cielo estrellado, lejos de las luces de la ciudad. Cada momento está diseñado para ofrecerte
                            experiencias inolvidables y conectar profundamente con la naturaleza en su estado más puro y
                            salvaje.</p>
                    </div>
                </article>
                <article className="info top-animal">
                    <div className="content">
                        <h2><span>Conoce al</span> Rey de la Selva</h2>
                        <p>El león, conocido como el rey de la selva, es el protagonista indiscutible. Majestuoso y
                            poderoso,
                            este icónico felino simboliza la esencia misma del safari. Con su imponente melena y su mirada
                            penetrante, el león encarna la fuerza y la realeza de la naturaleza salvaje. Observar a estos
                            magníficos animales en su hábitat natural es una experiencia que despierta un profundo respeto y
                            admiración, permitiéndote sentir la verdadera majestuosidad del reino animal. Ven y maravíllate
                            con
                            el rey de la selva, y vive una aventura que recordarás para siempre.</p>
                    </div>
                    <img className="info-image animal" src="img/reyDeLaSelva.jpg" alt="#" />
                </article>
                <article className="info offer">
                    <img className="info-image" src="img/infoTarifas.jpg" alt="imagen info tarifas" />
                    <h2>Ofertas</h2>
                    <img className="offer-image" src="img/descuento.png" alt="Descuento temporal" />
                </article>
            </section>
        </div>
    )
}
