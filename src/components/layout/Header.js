import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = ({nameActualState}) => {
    const [indexImageState, setIndexImageState] = useState(1);
    const [imageHeaderState, setImageHeaderState] = useState(`img/header/priamryCarrousel${indexImageState}.jpg`);

    const changeManualImage = (e, index) => {
        setImageHeaderState(`img/header/priamryCarrousel${index}.jpg`);
    }
    
    const changeImage = () => {
        setIndexImageState(indexAnterior => {
            let index = indexAnterior +1;
            if (index > 3) {
                index  = 1;
            }
            setImageHeaderState(`img/header/priamryCarrousel${index}.jpg`);
            return index;
        })
    }

    useEffect(() => {
        const intervalImage = setInterval(changeImage, 10000)
        return () => clearInterval(intervalImage);
    }, [])
    return (
        <header className="header">
            <img className="header-carrousel" src={imageHeaderState} alt="imagen carrousel 1" />
            <div className="header-principal">
                <h1>Wildlife Safari Club</h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <NavLink to="/inicio">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/animales">Animales</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tarifas">Tarifas</NavLink>
                        </li>
                        <li>
                            <NavLink to="/acercade">Acerca de</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <h2 className='header-namepage'>{
                (nameActualState) ? nameActualState : ""
                }</h2>
            <div className="header-control">
                <img onClick={ e => changeManualImage(e, 1)} src="img/svg/circle.svg" className="control" alt="Imagen de ciruclo control carrousel" />
                <img onClick={e => changeManualImage(e, 2)} src="img/svg/circle.svg" className="control" alt="Imagen de ciruclo control carrousel" />
                <img onClick={e => changeManualImage(e, 3)} src="img/svg/circle.svg" className="control" alt="Imagen de ciruclo control carrousel" />
            </div>
        </header>

    )
}