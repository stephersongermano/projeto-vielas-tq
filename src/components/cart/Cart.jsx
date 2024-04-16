import { 
    WrapperCartStyled,
    DivCart,
    H1,
    Span,
    WrapperItems,
    Img,
    ImgDescription,
    Table,
    Td1,
    Td2,
    Td3,
    Link,
    SelectItem,
    WrapperBuy,
    ButtonBuy 
} from "./cartStyle";

const Cart = () => (
    <>
        <WrapperCartStyled>
            <DivCart>
                <H1>Carrinho de Compras</H1>
                <Span>Itens selecionados para compra:1</Span>
                
                <WrapperItems>
                    <Img src="https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=mYYgZekhwsH2MrjuAip3dTTh2lxSYTr6el6u0C75MrI=" alt="" />
                    <ImgDescription>
                        <Table>
                            <tbody>
                                <tr>
                                    <Td1>Tipo de Mídia: </Td1>
                                    <Td2>Imagem do Creative</Td2>
                                </tr>
                                <tr>
                                    <Td1>Resolução: </Td1>
                                    <Td3>Resolução 4000 x 6000 - 300dpi - RGB</Td3>
                                </tr>
                                <tr>
                                    <Td1>Tipo de Licença: </Td1>
                                    <Td3>Royalty-free | <Link>Ver resumo das licenças</Link></Td3>
                                </tr>
                                <tr>
                                    <Td1>Como posso utilizar: </Td1>
                                    <Td3>Disponível para todas as utilizações permitidas ao abrigo dos nossos <Link>Termos de Serviços</Link></Td3>
                                </tr>
                            </tbody>
                        </Table>
                    </ImgDescription>
                    <SelectItem>
                        <input type="checkbox" id="selectItem"/>
                        <label htmlFor="selectItem"> Selecionar para compra</label>
                    </SelectItem>
                </WrapperItems>

                <WrapperBuy>
                    <table>
                        <tbody>
                            <tr>
                                <Td2>Subtotal:</Td2>
                                <td>R$ XX,XX</td>
                            </tr>
                        </tbody>
                    </table>
                    <ButtonBuy type="button" value="Prosseguir com a compra" />
                </WrapperBuy>
            </DivCart>
        </WrapperCartStyled>
    </>
  );
  
export default Cart;