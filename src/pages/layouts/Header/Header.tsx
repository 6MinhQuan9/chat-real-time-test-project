import "./Header.styles.scss";
import Logo from "../../../assets/img/logo.png";

function Header() {
  return (
    <aside className="header">
      <div className="logo">
        <img src={Logo} alt="logo" loading="lazy" />
      </div>

      <div className="page-list">
        <div>Documents</div>
        <div>Chats</div>
        <div>Bulletins</div>
      </div>

      <div className="user-info">user</div>
    </aside>
  );
}

export default Header;
