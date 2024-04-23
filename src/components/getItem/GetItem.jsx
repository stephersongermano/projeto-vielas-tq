import { 
    WrapperGetItemStyled,
    Img,
    DivDescription,
    PictureName,
    PictureDescription,
    Photographer,
    LinkPhotographer,
    PurchaseOptions,
    InputPurchase,
    ButtonBuy
} from "./getItemStyle";

const GetItem = () => (
    <>
        <WrapperGetItemStyled>
            <Img src="https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=mYYgZekhwsH2MrjuAip3dTTh2lxSYTr6el6u0C75MrI=" alt="" />
            <DivDescription>
                <PictureName>Casarão do Cambuci</PictureName>
                <PictureDescription>
                    Vista da casa da dona Magnolia no Cambuci.
                </PictureDescription>
                <Photographer>
                    Foto de <LinkPhotographer>Irã Romão</LinkPhotographer>
                </Photographer>
                <PurchaseOptions>
                    <InputPurchase type="checkbox" id="individualPurchase"/>
                    <label htmlFor="individualPurchase">Adicionar ao carrinho (compra individual)</label>
                    <br />
                    <InputPurchase type="checkbox" id="purchaseByPackage"/>
                    <label htmlFor="purchaseByPackage">Adicionar ao meu pacote (planos)</label>
                </PurchaseOptions>

                <ButtonBuy type="button" value="Comprar" />
            </DivDescription>            
        </WrapperGetItemStyled>
    </>
  );
  
export default GetItem;