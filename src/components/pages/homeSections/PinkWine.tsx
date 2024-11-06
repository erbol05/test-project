import scss from "./PinkWine.module.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";

const PinkWine = () => {
  return (
    <section className={scss.PinkWine}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text} data-aos="zoom-in">
            <h1>Розовые вина</h1>
            <h2>Золотая середина...</h2>
            <h3>
              Откройте для себя притягательные вина из Прованса, шелковистый
              <span> Бандоль</span> или летний <span>Лангедок Розе</span>
            </h3>
            <a href="#">
              Смотреть все розовые вина{" "}
              <span>
                <FaArrowAltCircleRight />
              </span>
            </a>
          </div>
          <div className={scss.image} data-aos="zoom-in-up">
            <img
              src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/rose-wine-eng.png?w=783&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinkWine;
