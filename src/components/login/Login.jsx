import { 
    DivLoginStyled, 
    WrapperLoginStyled, 
    Title, InputEmail, 
    InputPassword, 
    WrapperKeepMeConnected, 
    ButtonLogin, 
    ForgotPassword, 
    WrapperButton, 
    Span 
} from "./loginStyle";

const Login = () => (
  <>
    <WrapperLoginStyled>
        <DivLoginStyled>
            <Title>Bem vindo ;)</Title>
            <form action="">
                <InputEmail type="email" name="email" id="email" placeholder="E-mail" required/>
                <InputPassword type="password" name="password" id="password" placeholder="Senha" required/>
                
                <WrapperKeepMeConnected>
                    <input  type="checkbox" name="keepMeConnected" id="keepMeConnected" />
                    <label for="keepMeConnected">me mantenha conectado</label>
                </WrapperKeepMeConnected>  
                
                <WrapperButton>
                    <ButtonLogin>ENTRAR</ButtonLogin>
                    <Span>Esqueceu a senha? <ForgotPassword >Clique aqui</ForgotPassword></Span> 
                </WrapperButton>                        
            </form>
        </DivLoginStyled>
    </WrapperLoginStyled>
  </>
);

export default Login;
