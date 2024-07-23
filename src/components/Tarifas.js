import React, { useEffect } from 'react'

export const Tarifas = ({setNameActualState}) => {
    useEffect(()=>{
        setNameActualState("Tarifas")
    })
  return (
    <section class="tarifas">
    <article class="tarifas-generales tarifa">
        <h2 class="tarifa-title">Tarifas generales</h2>
        <table class="tarifa-tabla">
            <tr>
                <th>Edad</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td>0-2</td>
                <td>Gratis</td>
            </tr>
            <tr>
                <td>3 - 12</td>
                <td>4€</td>
            </tr>
            <tr>
                <td>+13</td>
                <td>12€</td>
            </tr>
            <tr>
                <td>+64</td>
                <td>7€</td>
            </tr>
            <tr>
                <td>Estudiantes</td>
                <td>8€</td>
            </tr>
            <tr>
                <td>Diversidad Funcional</td>
                <td>6€</td>
            </tr>
        </table>
        <p>Las tarifas Estudiantes, Diversidad Funcional y Mayores de 64 años, deben de proporcionar el documenPara acceder a las tarifas especiales para estudiantes, personas con diversidad funcional y mayores de 64 años, es necesario presentar el documento que acredite la validez de cada condición.to que acredite  la validez</p>
    </article>
    <article class="tarifas-generales tarifa">
        <h2 class="tarifa-title">TARIFA WILDLIFE VIP</h2>
        <table class="tarifa-tabla">
            <tr>
                <th>Tipo</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td>Familiar</td>
                <td>30€</td>
            </tr>
            <tr>
                <td>Individual</td>
                <td>20€</td>
            </tr>
            <tr>
                <td>Jóvenes</td>
                <td>25€</td>
            </tr>
            <tr>
                <td>Grupo</td>
                <td>30€</td>
            </tr>
        </table>
        <p>Para la tarifa WILD LIFE VIP Familiar, se requiere que al menos dos de los integrantes sean mayores de 18 años. Para la tarifa individual, el solicitante debe tener al menos 13 años y presentar la documentación de un padre, madre o tutor legal. En cuanto a la tarifa para jóvenes, es necesario que, si eres menor de 18 años, presentes la documentación de un padre, madre o tutor. Esta tarifa está disponible para personas de entre 16 y 24 años. Para la tarifa Grupo, se debe presentar una lista de los integrantes y la tarifa aplica para grupos de 10 o más personas. Es ideal para colegios, clubes u otras organizaciones.</p>
    </article>
</section>
  )
}
