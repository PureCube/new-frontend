import { userModel } from "entities/user";
import { useState } from "react";
import { Button, Input } from "shared/ui";

export interface LoginFormProps {
  isOpened: boolean,
	setIsOpened: any;
}

export const LoginForm = ({isOpened=false, setIsOpened}: LoginFormProps) => {
	const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const toggleModal = () => {
		setIsOpened(!isOpened);
	}

  const loginHandler = (event: any) => {
    event.preventDefault();
    if (emailInput !== "" && passwordInput !== "") {
      userModel.loginUser(emailInput, passwordInput);
      setEmailInput("");
      setPasswordInput("");
      setIsOpened(!isOpened);
    }
  }

	return (
		<form onSubmit={ (event) => event.preventDefault() } className="flex flex-col gap-3">
			<h3 className="text-xl md:text-2xl font-heading-semibold">Login</h3>
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
					<Button onClick={loginHandler}>Submit</Button>
					<Button onClick={toggleModal} type="secondary">cancel</Button>
				</div>
		</form>
	)
}
