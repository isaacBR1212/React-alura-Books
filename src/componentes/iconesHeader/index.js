import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
    padding: 0 10px;
    justify-content: center;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;    
` 

const icones = [perfil,sacola]

function iconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
              <Icone className='icone'><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}

export default iconesHeader