export const WalletCard = () => {
	return (
		<div className="relative pt-[50%] lg:pt-[56%] xl:pt-[50%] bg-neutral-900 hover:bg-neutral-800 rounded-3xl select-none">
			<div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center gap-3 p-3 md:p-5 cursor-pointer">
				<div className="flex justify-center items-center text-2xl rounded-full bg-neutral-700 w-12 h-12">+</div>
				<span className="text-base md:text-lg">Connect wallet</span>
			</div>
		</div>
	)
}
