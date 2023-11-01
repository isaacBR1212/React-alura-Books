import Input from "../Input/inde"
import styled from "styled-components"
import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section `
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width 100%;
`

const Titulo = styled.h2 `
    color: #FFF;
    font-size: 16px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3 `
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    flex-direction: row-reverse;
    cursor: pointer;
    width: 350px;
    height: 300px;
    margin-left: 640px;
    margin-top: 50px;

    &:hover {
    transition: 0.6s;
    border: 2px solid #fff;
    font-size: 30px;
    }

`


function Pesquisa() {
    const [livrosPesquisado, setLivrosPesquisados] = useState([])



    return(
        <PesquisaContainer>
            <Titulo>Ja sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento =>  {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisado.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </Resultado>   
            ) )}

        </PesquisaContainer>
    )
}

export default Pesquisa