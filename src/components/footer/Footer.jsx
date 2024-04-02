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
      <FooterVielas>VIELAS</FooterVielas>
      <FooterContainer>
        <FooterTags>
          <SiFacebook className="tag" />
          <SiInstagram className="tag" />
          <SiTwitter className="tag" />
          <SiWhatsapp className="tag" />
          <SiLinkedin className="tag" />
        </FooterTags>
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
      </FooterContainer>
    </FooterStyled>
  );
}
export default Footer;
