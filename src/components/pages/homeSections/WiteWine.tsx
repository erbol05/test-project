import scss from "./WiteWine.module.scss";
import { FaArrowAltCircleRight } from "react-icons/fa";

const WiteWine = () => {
  return (
    <section className={scss.WiteWine}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text} data-aos="fade-down-right">
            <h1>Белые вина</h1>
            <h2>Прекрасное начало...</h2>
            <h3>
              Порадуйте себя фруктовым <span>Грилло</span> из Сицилии,
              пробуждающим Шпуманте, изысканным <span>Рислингом</span> и игривой
              <span> Кустозой</span>
            </h3>
            <a href="#">
              Смотреть все белые вина{" "}
              <span>
                <FaArrowAltCircleRight />
              </span>
            </a>
          </div>
          <div className={scss.image} data-aos="fade-down-left">
            <img
              src="https://i0.wp.com/vinotekashop.com/wp-content/uploads/2019/03/white-wine-2.png?w=562&ssl=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WiteWine;
