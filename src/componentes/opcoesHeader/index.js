import styled from 'styled-components'

const textopcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']


const OpcoesContainer = styled.ul`
    display: flex;
` 

const Opcao = styled.li `
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;    
`

function opcoesHeader(){
    return (
        <OpcoesContainer>
            { textopcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
            ))}
        </OpcoesContainer>     
    )
}

export default opcoesHeader