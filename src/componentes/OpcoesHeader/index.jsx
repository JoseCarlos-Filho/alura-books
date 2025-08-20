import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
