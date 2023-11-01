import logo from '../../img/logo.svg'
import styled from 'styled-components'

const ContainerLogo = styled.div `
    display: flex;
    font-size: 30px;    
`

const LogoImg = styled.img `
    argin-right: 10px;    
`

function Logo(){
    return (
        <ContainerLogo>
            <LogoImg  
                src={logo} 
                alt='Icone da Alura'
            />
            <p><strong>Alura</strong>books</p>
        </ContainerLogo>
    )
}

export default Logo