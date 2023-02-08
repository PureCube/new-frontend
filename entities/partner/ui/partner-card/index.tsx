import { partnerModelProps } from "entities/partner/api";
import Image from "next/image";

export const PartnerCard = (partner: partnerModelProps) => {
	return (
		<div className="relative overflow-hidden bg-neutral-800 rounded-3xl pt-[100%]">
			<Image src={partner.image} layout="fill" objectFit="contain" objectPosition="center" alt="logo" className="p-3" />
		</div>
	)
}
