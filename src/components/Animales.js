import React, { useEffect, useState } from 'react'
import { Card } from './Card';

export const Animales = ({ setNameActualState }) => {
    const [animalesState, setAnimalesState] = useState([])
    const [filtroClaseState, setFiltroClaseState] = useState("");
    const [filtroNameState, setFiltroNameState] = useState("");

    const getAnimales = async (filterClass = "", animalName = "") => {
        const peticionAnimales = await fetch("animales.json");
        const animales = await peticionAnimales.json();

        let animalesFilter = animales;

        if (filterClass && filterClass != "none") {
            animalesFilter = animalesFilter.filter(animal => animal.clase.toLowerCase() === filterClass.toLowerCase());
        }

        if (animalName) {
            animalesFilter = animalesFilter.filter(animal => animal.nombre.toLowerCase().includes(animalName.toLowerCase()));
        }        
        
        setAnimalesState(animalesFilter);
    }

    const setClass = (e) => {
        const selectedClass = e.target.value;

        if (selectedClass && selectedClass !== "none") {
            setFiltroClaseState(selectedClass);
        }
    }

    const setName = (e) => {
        const selectdName = e.target.value;
        if (selectdName && selectdName !== "") {
            setFiltroNameState(selectdName);
        } else{
            setFiltroNameState("");
        }
    }

    const resetFilters = () => {
        const inputSearch = document.getElementsByName("search");
        const selectOption = document.getElementsByName("class");
        
        
        if (inputSearch) {
            setFiltroNameState("")
        }
        
        if (selectOption) {
            setFiltroClaseState("none");
        }

    }

    useEffect(() => {
        getAnimales(filtroClaseState, filtroNameState)
    }, [filtroClaseState, filtroNameState])

    useEffect(() => {
        setNameActualState("Animales")
        getAnimales();
    }, [])

    
    return (
        <>
            <form className="animals-control">
                <div className="options">
                    <label htmlFor="search">Buscar animal:
                        <input className="search" type="search" onChange={setName} name="search" id="search" value={filtroNameState}/>
                    </label>
                    <label htmlFor="class">Clase:
                        <select className="class" name="class" id="class" value={filtroClaseState} onChange={setClass} >
                            <option value="none"> None</option>
                            <option value="Mamífero">Mamífero</option>
                            <option value="Reptil">Reptiles</option>
                            <option value="Ave">Aves</option>
                            <option value="anfibios">Anfibios</option>
                        </select>
                    </label>
                </div>
                <div className="control-buttons">
                    <button type="button" onClick={resetFilters} className="delete button">Borrar Filtro</button>
                </div>
            </form>
            <section className="animal-principal">
                {animalesState.length > 0 ? (
                    animalesState.map((animal, index) => (
                        <Card key={index} animal={animal} />
                    ))
                ) : (
                    <p className='delete'>No existen animales</p>
                )}
            </section>
        </>
    )
}
