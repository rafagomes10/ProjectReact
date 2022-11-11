import styled from 'styled-components'

export const CardCarrinhoContainer = styled.div `
  padding: 5rem;
  padding-bottom:1rem;
  width: 100%;
  display: grid;
  grid-gap: 0.4rem 0.4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr ;
  }
`

export const CardCarrinho = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  width: 90%;
  height: 18rem;
  box-shadow: 2px 3px 30px 2px white;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  background-color: #e4e4e4;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  object-fit: cover;
  transform: scale(1);
  &:hover {
    background-color: #d1cbcb;
    color: #fff;
    transform: scale(1.05);
    transition: 0.3s;
    cursor: pointer;
  }
`

export const TopCardCarrinho = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
`

export const TopCardCarrinhoImage = styled.img`
  width: 100%;
  height: 100%;
  align-items: center;
`

export const BottomCardCarrinho = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `