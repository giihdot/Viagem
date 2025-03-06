import './Footer.css'
import Logo from '../assets/Logo_Img.png'

function Footer() {
    return (
        <footer className='Junt'>
        <p> <b> Para maiores informações: </b> +55 (19) 97864-2324 </p> 
        
        <p> Sobre a Empresa

            Atendimento ao Cliente
            Blog das Madames Voyage
            Canais Oficiais
            Políticas de Privacidade
            Termos de Uso
            Black Friday
            Excluir minha conta
        </p>

        <p> Madames Voyage: Agência de Viagens Online

            Passagens Aéreas Promocionais
            Passagens Aéreas Internacionais
            Passagem para São Paulo
            Passagem para Goiânia
            Passagem para Recife
            Passagem para Bahia
            Passagem para Santa Catarina
            Passagem para Maceió

        </p>
            <img className='img_logo' scr={Logo} alt="Logo" />

        </footer>
    )
}

export default Footer