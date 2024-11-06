"use client";
import scss from "./Сosy.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Cosy = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <section className={scss.Cosy}>
      <div className="container">
        <div
          className={scss.content}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* <h4>Просто. Уютно. ПараЛлель</h4> */}
          <div className={scss.one}>
            <h1>Магазин ПараЛлель</h1>
            <h2>
              У нас вы можете приобрести самые разные вина из разных стран и
              регионов как Франции, Италии, Португалии, ЮАР, Испании и Германии.
              Мы постоянно расширяем географию вин и предоставляем Вам широкий
              ассортимент на любой вкус и кошелек.
            </h2>
            <a href="">Подробнее о магазине</a>
          </div>
          <div className={scss.twoe}>
            <img
              src="https://amphore.ru/image/cache/catalog/images/table-wine_7_cap-500x500.jpg"
              alt=""
            />
          </div>
          <div className={scss.three}>
            <h1>Ресторан ПараЛлель</h1>
            <h2>
              Сильная любовь к вину и винной культуре стали причиной создания
              «Винотеки». «Винотека» — это место, где вы можете не только
              заказать изысканное вино, но и насладиться прекрасной атмосферой
              уюта, которое превратит любой вечер в душевное, незабываемое
              времяпрепровождение.
            </h2>
            <a href="#">Подробнее о ресторане</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cosy;
