import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { getFavoritos, postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  //height: 270px;
  min-height: 270px;
  max-height: 100%;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetchLivros();
    fetchFavoritos();
  }, []);

  async function fetchFavoritos() {
    try {
      setFavoritos(await getFavoritos());
    } catch (error) {
      console.error("Falha ao buscar favoritos:", error);
    }
  }

  async function fetchLivros() {
    try {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
    } catch (error) {
      console.error("Falha ao buscar livros:", error);
    }
  }

  async function insertFavorito(id) {
    if (favoritos.find((f) => f.id === id)) {
      alert(`Este livro já está na sua lista de favoritos.`);
      return;
    }
    try {
      await postFavorito(id);
      alert(`Livro adicionado aos favoritos!`);
      await fetchFavoritos(); // Atualiza a lista de favoritos para refletir a mudança
    } catch (error) {
      const mensagem = error.response?.data?.message || error.message;
      alert(`Erro ao adicionar favorito: ${mensagem}`);
    }
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livros) =>
            livros.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />
      {livrosPesquisados.map((livro) => (
        <Resultado onClick={() => insertFavorito(livro.id)}>
          <p>{livro.nome}</p>
          <img src={livro.src} />
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
