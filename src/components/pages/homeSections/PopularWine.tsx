import scss from "./PopularWine.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
let settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};
const PopularWine = () => {
  return (
    <section className={scss.PopularWine}>
      <div className="container">
        <div className={scss.content}>
          <h1>Самое популярное</h1>
          <h2>Любимые вина для приятных воспаминаний</h2>
          <div className={scss.product}>
            {/* <Slider className="flex" {...settings}> */}
            <div className={scss.pro}>
              <img
                src="https://inkerman.ru/upload/resize_cache/iblock/3fa/500_750_1/3fa6b9b455fcb1818852c52a1cdf699f.png"
                alt=""
              />
            </div>
            <div className={scss.pro}></div>
            <div className={scss.pro}></div>
            <div className={scss.pro}></div>
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularWine;
