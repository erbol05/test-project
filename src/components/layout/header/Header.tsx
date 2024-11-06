"use client";
import { useState } from "react";
import scss from "./Header.module.scss";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Header = () => {
  const [one, setOne] = useState(true);
  const [twoe, setTwoe] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const router = useRouter();
  return (
    <section className={scss.Header}>
      <div className="container">
        <div
          className={scss.content}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className={scss.image}>
            <div className={scss.nave}>
              <img
                src="https://p52.by/wp-content/uploads/2023/11/IMG_8552-300x294.png"
                alt=""
              />
              <h3>ПараЛлель</h3>
            </div>
            <div className={scss.text}>
              <h1
                onClick={() => {
                  setOne(true);
                  setTwoe(false);
                  setThree(false);
                  setFour(false);
                  setFive(false);
                  setSix(false);
                  router.push("/");
                }}
                style={{
                  color: `${one ? "#00ffff" : "#fff"}`,
                }}
              >
                главная
              </h1>
              <h1
                onClick={() => {
                  setTwoe(true);
                  setOne(false);
                  setThree(false);
                  setFour(false);
                  setFive(false);
                  setSix(false);
                  router.push("/catalog");
                }}
                style={{
                  color: `${twoe ? "#00ffff" : "#fff"}`,
                }}
              >
                каталог
              </h1>
              <h1
                onClick={() => {
                  setThree(true);
                  setTwoe(false);
                  setOne(false);
                  setFour(false);
                  setFive(false);
                  setSix(false);
                }}
                style={{
                  color: `${three ? "#00ffff" : "#fff"}`,
                }}
              >
                о нас
              </h1>
              <h1
                onClick={() => {
                  setFour(true);
                  setTwoe(false);
                  setOne(false);
                  setThree(false);
                  setFive(false);
                  setSix(false);
                }}
                style={{
                  color: `${four ? "#00ffff" : "#fff"}`,
                }}
              >
                контакты
              </h1>
            </div>
          </div>
          <div className={scss.icons}>
            <h1
              onClick={() => {
                setFive(true);
                setTwoe(false);
                setOne(false);
                setThree(false);
                setFour(false);
                setSix(false);
              }}
              style={{
                color: `${five ? "#00ffff" : "#fff"}`,
              }}
            >
              <MdFavoriteBorder />
            </h1>
            <h1
              onClick={() => {
                setSix(true);
                setTwoe(false);
                setOne(false);
                setThree(false);
                setFour(false);
                setFive(false);
              }}
              style={{
                color: `${six ? "#00ffff" : "#fff"}`,
              }}
            >
              <RiShoppingBag3Line />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
