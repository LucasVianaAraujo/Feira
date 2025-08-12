import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import frei from './assets/frei.png'
import frei_foto from './assets/frei foto.png'
import reuniao from './assets/reuniao.png'

function App() {

  const data = [
    { id: '1', image: frei_foto },
    { id: '2', image: reuniao }
  ]

  return (
    <div className="fundo_colorido">
      <div className="topo">
        <div className="alinhar">
          <img src={frei} alt="" />
          <h4>INSTITUTO SOCIAL NOSSA SENHORA DE FÁTIMA</h4>
        </div>

        <div className="conexoes">
          <Link to={'Sobre'}><h1>SOBRE</h1></Link>
          <Link to={'Cursos'}><h1>CURSOS</h1></Link>
          <Link to={'Contato'}><button>CONTATO</button></Link>
        </div>
      </div>
      <div className="separador">
        <div className="lado_esquerdo">
          <h1>DESCUBRA OS PROFISSIONAIS DO FUTURO</h1>
          <div className="bloco" />
          <h3>No dia 27 de setembro, a Feira de Profissões 2025 do Instituto Social Nossa Senhora de Fátima conecta você a especialistas, oficinas e tendências para ajudar a encontrar sua vocação e planejar o futuro.</h3>
          <button>INCREVER-SE</button>
        </div>
        <div className="lado_direito">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt={`Tecnologia ${item.id}`}
                  className="slide-item"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default App