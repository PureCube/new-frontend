import { userModel } from "entities/user";
import { useState } from "react";
import { Button, Input } from "shared/ui";

export interface ChangePasswordFormProps {
  isOpened: boolean,
	setIsOpened: any;
}

export const ChangePasswordForm = ({isOpened=false, setIsOpened}: ChangePasswordFormProps) => {
	const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");

  const toggleModal = () => {
		setIsOpened(!isOpened);
	}

	const changePasswordHandler = (event: any) => {
    event.preventDefault();
    if (oldPasswordInput !== "" && newPasswordInput !== "") {
      userModel.changePassword(oldPasswordInput, newPasswordInput);
      setOldPasswordInput("");
      setNewPasswordInput("");
      setIsOpened(!isOpened);
    }
  }

	return (
		<form onSubmit={ (event) => event.preventDefault() } className="flex flex-col gap-3">
			<h3 className="text-xl md:text-2xl font-heading-semibold">Change password</h3>
				<Input
          type="password"
          placeholder="enter a old password"
          value={oldPasswordInput}
          onChange={ (event: any) => setOldPasswordInput(event.target.value) }
        />
				<Input
          type="password"
          placeholder="enter a new password"
          value={newPasswordInput}
          onChange={ (event: any) => setNewPasswordInput(event.target.value) }
        />
				<div className="pt-3 space-x-3">
					<Button onClick={changePasswordHandler}>Submit</Button>
					<Button onClick={toggleModal} type="secondary">cancel</Button>
				</div>
		</form>
	)
}
