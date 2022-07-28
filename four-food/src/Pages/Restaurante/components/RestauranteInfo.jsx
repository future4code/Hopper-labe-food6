import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 22.5rem;
`
const StyledImg = styled.img`
	width: 20.5rem;
	height: 7.5rem;
	margin: 1.063rem 1rem 0.75rem;
	object-fit: contain;
`
const StyledNome = styled.span`
	width: 20.5rem;
	height: 1.125rem;
	margin: 0.75rem 1rem 0.5rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #e8222e;
`
const StyledCategoria = styled.p`
	width: 6.5rem;
	height: 1.125rem;
	margin: 0.5rem 0.5rem 0.5rem 1rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #b8b8b8;
`
const StyledEntrega = styled.span`
	width: 6.5rem;
	height: 1.125rem;
	margin: 0.5rem 0.5rem 0.625rem 1rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #b8b8b8;
`
const StyledFrete = styled.span`
	width: 6.5rem;
	height: 1.125rem;
	margin: 0.5rem 8rem 0.625rem 0.5rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #b8b8b8;
`
const StyledEnderoco = styled.p`
	width: 20.5rem;
	height: 1.125rem;
	margin: 0.625rem 1rem 1rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #b8b8b8;
`
const RestauranteInfo = ({
	nome,
	endereco,
	categoria,
	frete,
	tempoDeEntrega,
	imagem,
}) => {
	const InfoEntrega = styled.div`
		margin-right: 25px;
		height: 1.125rem;
		font-family: Roboto;
		font-size: 1rem;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: -0.39px;
		color: #b8b8b8;
	`

	return (
		<>
			<StyledContainer>
				<StyledImg src={imagem} alt='Logo do Restaurante' />
				<StyledNome>{nome}</StyledNome>

				<StyledCategoria>{categoria}</StyledCategoria>
				<InfoEntrega>
					<StyledEntrega>{tempoDeEntrega} min</StyledEntrega>
					<StyledFrete>Frete: R${frete}</StyledFrete>
				</InfoEntrega>
				<StyledEnderoco>{endereco}</StyledEnderoco>
			</StyledContainer>
		</>
	)
}

export default RestauranteInfo
