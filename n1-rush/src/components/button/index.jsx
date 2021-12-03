import React from "react";
import { PurchaseButton } from "./style";
import Mario from "../../assets/svgs/mario.svg";

const Button = ({ idProduct, products, pageProduct, bagTotal, setOpen, setBagTotal }) => {
  const [state, setState] = React.useState({
    label: "Comprar",
    disabled: false,
  });

  return (
    <PurchaseButton
      disabled={state.disabled}
      state={state}
      onClick={() => {
        setState({
          color: "#084154",
          label: "Comprado!",
          labelMargin: "50px !important",
          showMario: "block",
          disabled: true,
        });
        setOpen(true);
        setBagTotal(bagTotal + 1);
      }}
    >
      <p>{state.label}</p>
      <img src={Mario} alt="icon" />
    </PurchaseButton>
  );
};

export default Button;
