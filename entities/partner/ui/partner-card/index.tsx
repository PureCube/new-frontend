import { partnerModelProps } from "entities/partner/api";
import Image from "next/image";

export const PartnerCard = (partner: partnerModelProps) => {
	return (
		<div className="relative bg-neutral-800 p-3 md:p-5 rounded-3xl">
			<Image src={partner.image} width={200} height={200} alt="logo" />
		</div>
	)
}
