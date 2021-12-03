import { useState } from "react";
import { Container, Image, Info, Line } from "./style";
import Button from "../../button";
import Modal from "../../modal";

const Product = ({ pageProduct, product, setBagTotal,bagTotal }) => {
  const [open, setOpen] = useState(false);   
  
  return (
    <>
      <Container id={`product-${pageProduct}`}>
        <Image>
          <img src={product.imagePath} alt={product.title} />
        </Image>
        <Line />
        <Info>
          <small> {product.title} </small>
          <h6> {`R$ ${product.price}`} </h6>
          <Button  idProduct={product.id} pageProduct={pageProduct} setOpen={setOpen} setBagTotal={setBagTotal} bagTotal={bagTotal}/>
        </Info>
      </Container>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Product;
