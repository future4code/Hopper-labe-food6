import React from 'react'
import * as S from './styles'

const RestauranteInfo = ({
	nome,
	endereco,
	categoria,
	frete,
	tempoDeEntrega,
	imagem,
}) => {
	return (
		<>
			<S.Container>
				<S.Img src={imagem} alt='Logo do Restaurante' />
				<S.Nome>{nome}</S.Nome>

				<S.Categoria>{categoria}</S.Categoria>
				<S.InfoEntrega>
					<S.Entrega>{tempoDeEntrega} min</S.Entrega>
					<S.Frete>Frete: R${frete}</S.Frete>
				</S.InfoEntrega>
				<S.Endereco>{endereco}</S.Endereco>
			</S.Container>
		</>
	)
}

export default RestauranteInfo
