import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


export const ContainerSignIn = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const TitleSignIn = styled.div`
    width: 22.5rem;
    height: 2.625rem;
    padding: 0.75rem 2rem;
   
`;
export const TextTitleSignIn = styled.h2`
    /* width: 18.5rem; */
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`
export const BoxTextField = styled.div`
    width: 18.5rem;
    /* margin: 3.625rem 0 0; */
    padding: 0 1rem 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const TextFields = styled(TextField)` 
  width: 20.5rem;
  height: 3.5rem;
  margin: 0.5rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`
export const ButtonSignIn = styled(Button)`
  width: 20.5rem;
  height: 2.6rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;

`
export const LogoSignin = styled.img`
    width: 6.5rem;
    height: 3.625rem;
    object-fit: contain;
    margin-top: 4.43rem;
`


export const SpamText = styled.div`
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
    margin: 1rem;
    cursor: pointer;
`



// export const ContainerCart = styled.div`
//   height: 100%;
//   padding: 15px;
//   display: grid;
//   grid-template-rows: 1fr auto;
//   min-height: calc(100vh - 10rem);
//   gap: 8px;
// `;

// export const AddressRest = styled.div`
//   .gray {
//     color: gray;
//   }
//   .red {
//     color: red;
//   }
//   .center {
//     text-align: center;
//   }
//   min-height: 4rem;
// `;

// export const ProductsList = styled.div``;

// export const Frete = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-family: Roboto;
//   align-items: center;
//   width: 100%;
//   margin-top: 1rem;
// `;

// export const SubTotal = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-family: Roboto;
// `;

// export const Payments = styled.div`
//   margin-top: 1.5rem;
//   display: flex;
//   margin-bottom: 50px;
//   flex-direction: column;
//   font-family: Roboto;
// `;
