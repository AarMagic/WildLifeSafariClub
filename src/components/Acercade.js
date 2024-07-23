import React, { useEffect } from 'react'

export const Acercade = ({setNameActualState}) => {
    useEffect(()=>{
        setNameActualState("Acerca de")
    })
    return (
        <section class="acercade">
            <article class="acercade-card">
                <h2 class="acercade-title">Nuestra historia</h2>
                <p class="acercade-text">Desde nuestros inicios, el Wildlife Safari Club ha sido impulsado por la pasión de ofrecer experiencias de safari auténticas y sostenibles. Fundado por un grupo de entusiastas de la vida salvaje, nuestro objetivo es conectar a los viajeros con la majestuosa naturaleza africana mientras fomentamos la conservación y el respeto por los ecosistemas.</p>
                <img class="acercade-image" src="img/nuestrahistoria.jpg" alt="Nuestra historia imagen" />
            </article>
            <article class="acercade-card">
                <h2 class="acercade-title">NUESTRA MISIÓN</h2>
                <p class="acercade-text">Nuestra misión es ofrecer experiencias de safari excepcionales que no solo deleiten a nuestros visitantes, sino que también contribuyan a la conservación de la vida salvaje y el entorno natural. Trabajamos en estrecha colaboración con comunidades locales para asegurar que cada aventura apoye la preservación y el respeto por la biodiversidad.</p>
                <img class="acercade-image" src="img/nuestramision.jpg" alt="Nuestra misión imagen" />
            </article>
            <article class="acercade-card">
                <h2 class="acercade-title">NUESTROS VALORES</h2>
                <p class="acercade-text">En el Wildlife Safari Club, valoramos profundamente la sostenibilidad, la autenticidad y el respeto. Nos comprometemos a operar de manera responsable, minimizando nuestro impacto en el medio ambiente y promoviendo prácticas de turismo ético que beneficien a las comunidades locales y a la fauna.</p>
                <img class="acercade-image" src="img/nuestrosvalores.jpg" alt="Nuestra historia imagen" />
            </article>
            <article class="acercade-card">
                <h2 class="acercade-title">EQUIPO</h2>
                <p class="acercade-text">Nuestro equipo está compuesto por guías apasionados y experimentados que conocen cada rincón de la sabana y están dedicados a ofrecerte una experiencia inolvidable. Con años de experiencia en la vida salvaje y el turismo, están aquí para compartir su conocimiento y amor por la naturaleza.</p>
                <img class="acercade-image" src="img/equipo.jpg" alt="Equipo imagen" />
            </article>
            <article class="acercade-card">
                <h2 class="acercade-title">TESTIMONIOS</h2>
                <p class="acercade-text">No solo confíes en nuestra palabra; lee lo que nuestros aventureros tienen que decir sobre sus experiencias con nosotros. Nuestros clientes han descrito su tiempo en el Wildlife Safari Club como transformador y profundamente gratificante.</p>
                <img class="acercade-image" src="img/testimonios.jpg" alt="Testimonios imagen" />
            </article>
        </section>
    )
}
