import { useState } from "react";
import { Button, Modal } from "shared/ui";
import { LoginForm } from "../login-form";
import { RegisterForm } from "../register-form";

export const AuthCard = () => {
	const [createModalState, setCreateModalState] = useState(false);
	const [loginModalState, setLoginModalState] = useState(false);

	const createAccount = () => {
		setCreateModalState(!createModalState);
	}
	const login = () => {
		setLoginModalState(!loginModalState);
	}

	return (
		<>
			<div className="relative pt-[50%] lg:pt-[56%] xl:pt-[50%] bg-neutral-900 rounded-3xl">
				<div className="absolute top-0 bottom-0 flex flex-col justify-between p-3 md:p-5">
					<h3 className="text-2xl md:text-3xl font-heading-semibold">Connect to PureCube ID<br />and start playing</h3>
					<div className="flex flex-col gap-3 items-start">
						<Button onClick={createAccount}>Create account</Button>
						<a onClick={login} className="text-sm md:text-base underline cursor-pointer">If you already have an account, just login</a>
					</div>
				</div>
			</div>


			<Modal isOpened={createModalState} setIsOpened={setCreateModalState}>
				<RegisterForm isOpened={createModalState} setIsOpened={setCreateModalState} />
			</Modal>

			<Modal isOpened={loginModalState} setIsOpened={setLoginModalState}>
				<LoginForm isOpened={loginModalState} setIsOpened={setLoginModalState} />
			</Modal>
		</>
	)
};
