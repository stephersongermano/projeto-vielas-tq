import {
  FooterStyled,
  FooterVielas,
  FooterContainer,
  FooterTags,
  FooterLinks,
} from "./footerStyle";
import {
  SiWhatsapp,
  SiFacebook,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
} from "react-icons/si";

function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterVielas>
          <h1>VIELAS</h1>
        </FooterVielas>

        <FooterTags>
          <SiFacebook className="tag" />
          <SiInstagram className="tag" />
          <SiTwitter className="tag" />
          <SiWhatsapp className="tag" />
          <SiLinkedin className="tag" />
        </FooterTags>
      </FooterContainer>
      <FooterLinks>
        <ul>
          <li>
            <a href="/quemSomos">Quem Somos</a>
          </li>
          <li>
            <a href="/equipe">Equipe</a>
          </li>
          <li>
            <a href="/apoie">Apoie</a>
          </li>
          <li>
            <a href="faleConosco">Fale Conosco</a>
          </li>
        </ul>
      </FooterLinks>
    </FooterStyled>
  );
}
export default Footer;
