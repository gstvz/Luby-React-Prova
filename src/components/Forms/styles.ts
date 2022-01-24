import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;  
  font-style: italic;
  height: 100%;
  justify-content: center;  
  width: 35.2rem;
`

export const FormTitle = styled.h2`
  color: #707070;
  font-size: 3.5rem;
  margin-bottom: 3rem;
`

export const Form = styled.form`
  background-color: #FFFFFF;
  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
  display: flex;
  flex-direction: column;
  max-width: 35.2rem;
  padding-bottom: 4rem;
  width: 100%;
`

export const Label = styled.label`
  border-bottom: 2px solid #EBEBEB;
  padding: 3rem;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  color: #9D9D9D;
  font: inherit;
  font-size: 1.7rem;
  font-weight: bold;
  width: 100%;
`

export const PasswordLink = styled(Link)`
  color: #C1C1C1;
  font-size: 1.7rem;
  padding: 2rem;
  text-decoration: none;
  text-align: right;
`

export const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: #B5C401;
  display: flex;
  justify-content: center;
  font: inherit;
  font-size: 3.5rem;
`

export const ArrowRight = styled(AiOutlineArrowRight)`
  height: 2.4rem;  
  margin-left: 1rem;
  width: 2.4rem;
`