import { useState } from "react";
import { Button, Input } from "shared/ui";

export const LoginForm = () => {
	const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

	return (
		<form className="flex flex-col gap-3">
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
					<Button>Submit</Button>
					<Button type="secondary">cancel</Button>
				</div>
		</form>
	)
}
