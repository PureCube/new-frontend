import { userModel } from "entities/user";
import { observer } from "mobx-react-lite";
import Image from "next/image";

export interface UserAvatarProps {
	size: number,
}

export const UserAvatar = observer( ({size}: UserAvatarProps) => {
	return (
		<div className={`relative w-${size} h-${size}`}>
			<Image src={userModel.userAvatar} layout="fill" alt="user avatar" />
		</div>
	)
} )
