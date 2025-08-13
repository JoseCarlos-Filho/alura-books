import "./estilo.css";
import logo from "../../assets/logo.svg";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
