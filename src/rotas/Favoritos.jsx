import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFavoritos, deleteFavorito } from "../servicos/favoritos";
import livroImg from "../assets/livro.png";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 20px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    try {
      const favoritosDaAPI = await getFavoritos();
      setFavoritos(favoritosDaAPI);
    } catch (error) {
      console.error("Falha ao buscar favoritos:", error);
    }
  }

  async function deletarFavorito(id) {
    await deleteFavorito(id);
    await fetchFavoritos();
    alert(`Livro de id: ${id} removido dos favoritos!`);
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <div>
        <Titulo>Meus Livros Favoritos</Titulo>
        <ResultadoContainer>
          {favoritos.map((favorito) => (
            <Resultado
              key={favorito.id}
              onClick={() => deletarFavorito(favorito.id)}
            >
              <p>{favorito.nome}</p>
              <img src={livroImg} alt={`Capa do livro ${favorito.nome}`} />
            </Resultado>
          ))}
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
