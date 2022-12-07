import { userModel } from "entities/user";
import { observer } from "mobx-react-lite";
import Image from "next/image";

export interface UserAvatarProps {
	size: number,
}

export const UserAvatar = observer( ({size}: UserAvatarProps) => {
	return (
		<div>
			<Image src={userModel.avatar} width={size} height={size} alt="user avatar" />
		</div>
	)
} )
