import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 35.2rem;
`;

export const FormTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  background-color: #ffffff;
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
  display: flex;
  flex-direction: column;
  max-width: 35.2rem;
  width: 100%;
`;

export const Label = styled.label`
  border-bottom: 2px solid #ebebeb;
  padding: 2.5rem;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  color: #9d9d9d;
  font: inherit;
  font-size: 1.7rem;
  width: 100%;
`;

export const InvalidInput = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: normal;
`;

export const PasswordLink = styled(Link)`
  color: #c1c1c1;
  font-size: 1.7rem;
  padding: 2rem 2rem 0 0;
  text-align: right;
`;

export const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #b5c401;
  display: flex;
  justify-content: center;
  font: inherit;
  font-size: 3.5rem;
  padding: 2rem;
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2.4rem;
  margin-left: 1rem;
  width: 2.4rem;
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  height: 2.4rem;
  margin-right: 1rem;
  width: 2.4rem;
`;

export const ActionLink = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  font: inherit;
  font-size: 3.5rem;
  padding: 3rem;
  text-decoration: none;
  text-align: right;
`;
