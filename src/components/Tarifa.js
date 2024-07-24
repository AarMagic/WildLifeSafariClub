import React from 'react'

export const Tarifa = (tarifa) => {

    const tarifas = tarifa.tarifa

    return (
        <article className="tarifas-generales tarifa">
            <h2 className="tarifa-title">Tarifas generales</h2>
            <table className="tarifa-tabla">
                <thead>
                    <tr>
                        <th>Edad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(tarifas) ? (
                            tarifas.map((element, index) => (
                                <tr key={index}>
                                    {(element.edad) ? <td>{element.edad}</td> : <td>{element.tipo}</td>}
                                    <td>{element.precio}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No data available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                tarifas.length > 0 && tarifas[0].edad
                ?
                <p>Para acceder a las tarifas especiales para estudiantes, personas con diversidad funcional y mayores de 64 años, es necesario presentar el documento que acredite la validez de cada condición.</p>
                :
                <p>Para la tarifa WILD LIFE VIP Familiar, se requiere que al menos dos de los integrantes sean mayores de 18 años. Para la tarifa individual, el solicitante debe tener al menos 13 años y presentar la documentación de un padre, madre o tutor legal. En cuanto a la tarifa para jóvenes, es necesario que, si eres menor de 18 años, presentes la documentación de un padre, madre o tutor. Esta tarifa está disponible para personas de entre 16 y 24 años. Para la tarifa Grupo, se debe presentar una lista de los integrantes y la tarifa aplica para grupos de 10 o más personas. Es ideal para colegios, clubes u otras organizaciones.</p>
            }
        </article>
    )
}
