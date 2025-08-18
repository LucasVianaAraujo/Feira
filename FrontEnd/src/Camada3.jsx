import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import frei from './assets/frei.png';
import meninas_adm from './assets/adm.png';
import informatica from './assets/info.png';
import cv from './assets/paleta.png';
import eletro from './assets/eletro.png';
import robo from './assets/ilustrativa.png';

function Camada3() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const data = [
        { id: '1', image: informatica, text: <div><h1>DESENVOLVEDORES</h1><h3>Descrição detalhada</h3></div> },
        { id: '2', image: meninas_adm, text: <div><h1>ADMINISTRADORES</h1><h3>Descrição detalhada</h3></div> },
        { id: '3', image: cv, text: <div><h1>DESIGNERS</h1><h3>Descrição detalhada</h3></div> },
        { id: '4', image: eletro, text: <div><h1>ELETROTÉCNICOS</h1><h3>Descrição detalhada</h3></div> },
        { id: '5', image: robo, text: <div><h1>ROBÓTICA</h1><h3>Descrição detalhada</h3></div> }
    ];

    return (
        <div className={`fundo_colorido2 ${isMobile ? 'mobile' : ''}`}>
            <div className="caixa">
                <h1>PROFISSIONAIS QUALIFICADOS</h1>
            </div>

            <div className="carrossel">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true
                    }}
                    slidesPerView={isMobile ? 1.1 : 4}
                    spaceBetween={isMobile ? 10 : 50}
                    centeredSlides={isMobile}
                    grabCursor={true}
                    navigation
                    loop={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="slide-content">
                                <img
                                    src={item.image}
                                    alt={`Tecnologia ${item.id}`}
                                    className="slide-item"
                                />
                                <div className="slide-text">
                                    {item.text}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Camada3;