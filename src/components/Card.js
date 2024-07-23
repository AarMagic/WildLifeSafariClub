import React from 'react'

export const Card = (animal) => {
    const {animal:{ nombre, nombre_cientifico, clase, habitad, reproduccion, imagen, peso, longitud, altura }} = animal;
    return (
        <article className="card">
            <div className="card-header">
                <img src={imagen} alt={`Foto de ${nombre}`} />
                <strong className="card-name">{nombre}</strong>
                <p className="card-subname">{nombre_cientifico}</p>
            </div>
            <div className="card-info">
                <p className="card-class">{clase}</p>
                <p className="habitat">{habitad}</p>
                <p className="reproduction">{reproduccion}</p>
            </div>
            <div className="card-animal-details">
                <div className="card-detail-content">
                    <p className="label">Peso</p>
                    <p className="data">{peso} <span className="measure">Kg</span></p>
                </div>
                <div className="card-detail-content">
                    <p className="label">Longitud</p>
                    <p className="data">{longitud} <span className="measure">m</span></p>
                </div>
                <div className="card-detail-content">
                    <p className="label">Altura</p>
                    <p className="data">{altura} <span className="measure">m</span></p>
                </div>
            </div>
        </article>
    )
}