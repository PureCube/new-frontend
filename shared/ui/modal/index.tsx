import { Children, useState } from "react";
import { Button } from "../button";
import { Container } from "../container";

export interface ModalProps {
	children: string | JSX.Element | JSX.Element[],
	isOpened: boolean,
	setIsOpened: any;
}

export const Modal = ({children, isOpened=false, setIsOpened}: ModalProps) => {

	const toggleModal = () => {
		setIsOpened(!isOpened);
	}

	 if (isOpened) return (
		<div onClick={toggleModal} className="fixed z-30 top-0 bottom-0 right-0 left-0 bg-neutral-900/50 flex justify-center items-center">

			<Container>
				<div onClick={ (event) => event.stopPropagation() } className="mx-auto bg-neutral-900 rounded-3xl p-3 md:p-5 w-full lg:w-1/2">
					{children}
				</div>
			</Container>

		</div>
	)
	else return null;
}
