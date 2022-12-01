import { useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";

import { addItem } from "API/API";

const initState = {
  name: "",
  product: "",
  quantity: "",
  price: "",
  market: "",
};

const ModalForm = ({ onSubmitToRefresh }) => {
  const [productInfo, setProductInfo] = useState(initState);
  const { register, handleSubmit } = useForm();

  const onSubmitSend = async () => {
    try {
      await addItem(productInfo);
      onSubmitToRefresh();
    } catch (error) {
      toast.error(error.message);
    }
    setProductInfo(initState);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setProductInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitSend)}>
      <StyledInput
        {...register("name", {
          required: true,
          maxLength: 20,
          pattern: {
            value: /^[A-Za-z]+$/i,
          },
        })}
        onChange={onInputChange}
        label="Name"
        variant="outlined"
        name="name"
        value={productInfo.name}
        autoComplete="off"
      />
      <StyledInput
        {...register("product", {
          required: true,
        })}
        onChange={onInputChange}
        label="Product"
        variant="outlined"
        name="product"
        value={productInfo.product}
        autoComplete="off"
      />
      <StyledInput
        {...register("quantity", {
          required: true,
          pattern: /^[0-9]+$/,
        })}
        type="number"
        onChange={onInputChange}
        label="Quantity(pcs)"
        variant="outlined"
        name="quantity"
        value={productInfo.quantity}
        autoComplete="off"
      />
      <StyledInput
        {...register("price", {
          required: true,
          maxLength: 6,
          pattern: /^[0-9]+$/,
        })}
        type="number"
        onChange={onInputChange}
        label="Price($)"
        variant="outlined"
        name="price"
        value={productInfo.price}
        autoComplete="off"
      />
      <StyledInput
        {...register("market", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
        onChange={onInputChange}
        label="Market"
        variant="outlined"
        name="market"
        value={productInfo.market}
        autoComplete="off"
      />
      <StyledBtn
        disabled={
          !productInfo.market ||
          !productInfo.price ||
          !productInfo.quantity ||
          !productInfo.product ||
          !productInfo.name
        }
        type="submit"
        variant="contained"
      >
        Add product
      </StyledBtn>
      <ToastContainer />
    </StyledForm>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  onSubmitToRefresh: PropTypes.func,
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-around;
  width: 800px;
  height: 600px;
`;

const StyledInput = styled(TextField)`
  width: 40%;
`;

const StyledBtn = styled(Button)`
  position: absolute !important;
  bottom: 30px;
  right: 30px;
  width: 200px;
`;
