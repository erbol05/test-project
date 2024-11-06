import scss from "./Header.module.scss";
const Header = () => {
  return (
    <div className={scss.header}>
      <div className="container">
        <div className={scss.content}>header</div>
      </div>
    </div>
  );
};

export default Header;
