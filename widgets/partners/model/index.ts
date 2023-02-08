import { partnerModelProps } from "entities/partner";
import {makeAutoObservable} from "mobx";

export interface partnersModelProps {
	partnersList: partnerModelProps[],
}

export const partnersModel: partnersModelProps = makeAutoObservable({
	// STORE
	partnersList: [
		{
			image: "/images/partners/near2.png",
		},
		{
			image: "/images/partners/paras.png",
		},
		{
			image: "/images/partners/leafes.png",
		},
	]
});
