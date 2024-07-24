import React, { useEffect, useState } from 'react'
import { Tarifa } from './Tarifa';

export const Tarifas = ({ setNameActualState }) => {
    const [tarifasGeneralesState, setTarifasGeneralesState] = useState([])
    const [tarifasWildlifeVip, setTarifasWildlifeVip] = useState([])
    const obtenerTarifas = async () => {
        const obtenerTarifas = await fetch("tarifas.json");
        const tarifas = await obtenerTarifas.json();
        const{ tarifas_generales, tarifas_wildlife_vip} = tarifas;
        setTarifasGeneralesState(tarifas_generales)
        setTarifasWildlifeVip(tarifas_wildlife_vip)
    }

    useEffect(() => {
        obtenerTarifas()
        setNameActualState("Tarifas")
    }, [])

    return (
        <section className="tarifas">
            <Tarifa tarifa={tarifasGeneralesState} />
            <Tarifa tarifa={tarifasWildlifeVip} />
        </section>
    )
}
