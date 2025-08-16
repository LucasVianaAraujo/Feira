import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import frei from './assets/frei.png'
import meninas_adm from './assets/adm.png'
import informatica from './assets/info.png'
import cv from './assets/paleta.png'
import eletro from './assets/eletro.png'
import robo from './assets/ilustrativa.png'

function Camada3() {

    const data = [
        { id: '1', image: informatica, text: <div><h1>DESENVOLVEDORES</h1><h3>Descrição detalhada</h3></div> },
        { id: '2', image: meninas_adm, text: <div><h1>ADMINISTRADORES</h1><h3>Descrição detalhada</h3></div> },
        { id: '3', image: cv, text: <div><h1>DESIGNERS</h1><h3>Descrição detalhada</h3></div> },
        { id: '4', image: eletro, text: <div><h1>ELETROTÉCNICOS</h1><h3>Descrição detalhada</h3></div> },
        { id: '5', image: robo, text: <div><h1>ROBÓTICA</h1><h3>Descrição detalhada</h3></div> }
    ]

    return (
        <div className="fundo_colorido2">
            <div className="caixa">
                <h1>PROFISSIONAIS QUALIFICADOS</h1>
            </div>

            <div className="carrossel">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt={`Tecnologia ${item.id}`}
                                className="slide-item"
                            />
                            <div className="slide-text">
                                {item.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Camada3