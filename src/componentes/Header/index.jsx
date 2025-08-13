import Logo from "../../componentes/Logo";
import OpcoesHeader from "../../componentes/OpcoesHeader";
import IconesHeader from "../../componentes/IconesHeader";
import "./estilos.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
