import { userModel } from "entities/user";
import { useState } from "react";
import { Button, Input } from "shared/ui";

export interface ChangeNameFormProps {
  isOpened: boolean,
	setIsOpened: any;
}

export const ChangeNameForm = ({isOpened=false, setIsOpened}: ChangeNameFormProps) => {
	const [nameInput, setNameInput] = useState("");

  const toggleModal = () => {
		setIsOpened(!isOpened);
	}

	const changeNameHandler = (event: any) => {
    event.preventDefault();
    if (nameInput !== "") {
      userModel.changeName(nameInput);
      setNameInput("");
      setIsOpened(!isOpened);
    }
  }

	return (
		<form onSubmit={ (event) => event.preventDefault() } className="flex flex-col gap-3">
			<h3 className="text-xl md:text-2xl font-heading-semibold">Change name</h3>
        <Input
          type="text"
          placeholder="enter a new name"
          value={nameInput}
          onChange={ (event: any) => setNameInput(event.target.value) }
        />
				<div className="pt-3 space-x-3">
					<Button onClick={changeNameHandler}>Submit</Button>
					<Button onClick={toggleModal} type="secondary">cancel</Button>
				</div>
		</form>
	)
}
