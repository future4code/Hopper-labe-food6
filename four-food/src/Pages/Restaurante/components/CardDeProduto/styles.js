import ReactModal from 'react-modal'
import styled from 'styled-components'

export const CardComidas = styled.div`
	display: flex;
	width: 20.5rem;
	height: 7.5rem;
	margin: 0.5rem 1rem 0;
	border-radius: 0.5rem;
	border: 1px solid #e6e6e6;
`
export const ImgComidas = styled.img`
	width: 6rem;
	margin: 0 1rem 0 0;
	object-fit: cover;
`
export const NomeDoItem = styled.p`
	width: 10.438rem;
	height: 1.125rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #e8222e;
`
export const Descricao = styled.span`
	width: 12.5rem;
	height: 1.875rem;
	font-family: Roboto;
	font-size: 0.75rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.29px;
	color: #b8b8b8;
`
export const BotaoAdicionar = styled.button`
	position: relative;
	left: 116px;
	font-family: Roboto;
	text-align: center;
	width: 100px;
	height: 1.9rem;
	border-radius: 8px 0px 8px 0px;
	border: 1px solid black;
	color: #000000;
`
export const Preco = styled.span`
	width: 7.375rem;
	height: 1.188rem;
	font-family: Roboto;
	font-size: 1rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.39px;
	color: #000000;
`
export const Modal = styled.div`
	display: ${({ isOpen }) =>
		isOpen ? 'block' : 'none'}; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

	/* Modal Content/Box */
	.modal-content {
		z-index: 2;
		border-radius: 5px;
		background-color: #fefefe;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 80%; /* Could be more or less, depending on screen size */
	}
	.modal-header {
		padding: 5px;
		color: white;
	}

	/* Modal Body */
	.modal-body {
		padding: 2px 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		input {
			margin-bottom: 10px;
		}
		button {
			width: 200px;
		}
	}

	/* Modal Footer */
	.modal-footer {
		padding: 2px 16px;
		background-color: #5cb85c;
		color: white;
	}

	/* Modal Content */
	.modal-content {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #fefefe;
		top: 45%;
		margin: auto;
		padding: 0;
		border: 1px solid #888;
		width: 80%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		animation-name: animatetop;
		animation-duration: 1s;
	}

	/* Add Animation */
	@keyframes animatetop {
		from {
			top: -300px;
			opacity: 0;
		}
		to {
			top: 45%;
			opacity: 1;
		}
	}
	/* The Close Button */
	.close {
		color: #aaa;
		float: right;
		border-radius: 50%;
		border: none;
		font-size: 20px;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`
export const ComidaInfo = styled.div`
	display: flex;
	flex-direction: column;
`
