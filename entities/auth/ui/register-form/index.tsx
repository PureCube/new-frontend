import { userModel } from "entities/user";
import { useState } from "react";
import { Button, Input } from "shared/ui";

export interface RegisterFormProps {
	isOpened: boolean,
	setIsOpened: any;
}

export const RegisterForm = ({isOpened=false, setIsOpened}: RegisterFormProps) => {
	const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameInput, setNameInput] = useState("");

	const toggleModal = () => {
		setIsOpened(!isOpened);
	}

	const registerHandler = (event: any) => {
    event.preventDefault();
    if (emailInput !== "" && passwordInput !== "" && nameInput !== "") {
      userModel.registerUser(emailInput, passwordInput, nameInput);
      setEmailInput("");
      setPasswordInput("");
      setNameInput("");
      setIsOpened(!isOpened);
    }
  }

	return (
		<form onSubmit={ (event) => event.preventDefault() } className="flex flex-col gap-3">
			<h3 className="text-xl md:text-2xl font-heading-semibold">Create account</h3>
			<Input
					type="text"
					placeholder="Name"
					value={nameInput}
					onChange={ (event: any) => setNameInput(event.target.value) }
				/>
        <Input
          type="text"
          placeholder="E-mail"
          value={emailInput}
          onChange={ (event: any) => setEmailInput(event.target.value) }
        />
        <Input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={ (event: any) => setPasswordInput(event.target.value) }
        />
				<div className="pt-3 space-x-3">
					<Button onClick={registerHandler}>Submit</Button>
					<Button onClick={toggleModal} type="secondary">cancel</Button>
				</div>
		</form>
	)
}
