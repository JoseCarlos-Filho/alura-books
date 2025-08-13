import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";
import "./estilos.css";

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
