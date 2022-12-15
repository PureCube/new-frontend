import { userModel } from "entities/user/model";
import { useState } from "react";
import { Dropdown, Modal } from "shared/ui";
import { ChangePasswordForm } from "../change-password-form";
import { ChangeNameForm } from "../change-name-form";
import { UserAvatar } from "../user-avatar";
import { observer } from "mobx-react-lite";

export const UserProfileCard = observer( () => {
	const [changeNameState, setChangeNameState] = useState(false);
	const [changePasswordState, setChangePasswordState] = useState(false);

	const changeName = () => {
		setChangeNameState(!changeNameState);
	}
	const changePassword = () => {
		setChangePasswordState(!changePasswordState);
	}
	const logout = () => {
		userModel.logout();
	}

	return (
		<>
			<div className="relative pt-[50%] lg:pt-[56%] xl:pt-[50%] bg-neutral-900 rounded-3xl">

				<div className="absolute top-3 md:top-5 right-3 md:right-5">
					<Dropdown
						options={[
							{
								name: "change name",
								onClick: changeName,
							},
							{
								name: "change password",
								onClick: changePassword,
							},
							{
								name: "logout",
								onClick: logout,
							},
						]}
					/>
				</div>

				<div className="absolute top-0 bottom-0 p-3 md:p-5 flex flex-col gap-2">

					<h3 className="text-xl md:text-2xl uppercase">Profile details</h3>

					<div className="flex items-center gap-3">
						<UserAvatar size={65} />
						<div className="flex flex-col">
							<span className="text-xl md:text-2xl">{userModel.name}</span>
							<span className="text-sm md:text-base">PureCube ID: {userModel.userId}</span>
						</div>
					</div>

					<span className="uppercase text-base md:text-lg">Gold: {userModel.gold}</span>

				</div>
			</div>

			<Modal isOpened={changeNameState} setIsOpened={setChangeNameState}>
				<ChangeNameForm isOpened={changeNameState} setIsOpened={setChangeNameState} />
			</Modal>
			<Modal isOpened={changePasswordState} setIsOpened={setChangePasswordState}>
				<ChangePasswordForm isOpened={changePasswordState} setIsOpened={setChangePasswordState} />
			</Modal>
		</>
	)
} )
