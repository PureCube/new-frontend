import {makeAutoObservable} from 'mobx';

export interface userModelProps {
	userAvatar: string,
}

export const userModel: userModelProps = makeAutoObservable({
	userAvatar: "/images/user/user-avatar.svg",
});
