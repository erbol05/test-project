import scss from "./RedWine.module.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";

const RedWine = () => {
  return (
    <section className={scss.RedWine}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image} data-aos="fade-right">
            <img
              src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/red-wine.png?w=523&ssl=1"
              alt=""
            />
          </div>
          <div className={scss.text} data-aos="fade-left">
            <h1>Красные вина</h1>
            <h2>Лучший выбор для расслабляющего вечера</h2>
            <h3>
              Попробуйте мягкий <span>Гренаш</span>, классический
              <span> Бордо</span>, темпераментные испанские вина или элегантный
              <span> Пино Нуар…</span>
            </h3>
            <a href="#">
              Смотреть все красные вина{" "}
              <span>
                <FaArrowAltCircleRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedWine;
