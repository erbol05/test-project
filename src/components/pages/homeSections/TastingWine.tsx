import scss from "./TastingWine.module.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TastingWine = () => {
  return (
    <section className={scss.TastingWine}>
      <div className="container">
        <div
          className={scss.content}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className={scss.one}>
            <img
              src="https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-red-wine-being-poured-into-a-glass-creating-swirling-motion-on-png-image_12581842.png"
              alt=""
            />

            <div className={scss.nav}>
              <div className={scss.text}>
                <h1>Достовка</h1>
                <h2>Вина</h2>
                <h3>Порадуй себя любимым вином когда угодно и где угодно</h3>
                <a href="#">
                  Условия доставки
                  <span>
                    <FaArrowAltCircleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={scss.twoe}>
            <div className={scss.nav}>
              <div className={scss.text}>
                <h1>Дегустация</h1>
                <h2>Вина</h2>
                <h3>
                  Мы всегда рады организовать специальный дегустационный вечер
                  для вас
                </h3>
                <a href="#">
                  Условия доставки
                  <span>
                    <FaArrowAltCircleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingWine;
