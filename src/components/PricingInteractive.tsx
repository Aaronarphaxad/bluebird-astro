import React, { useState } from 'react';
import CTA from './ui/CTA';
import pricingConfig from '../content/pricing/packages.json';

// Re-export so pricing.astro can use the same source
export { pricingConfig };

// ============================================
// PRICING COMPONENT
// ============================================
const PricingInteractive: React.FC = () => {
	const [isMonthly, setIsMonthly] = useState(false);
	const { discount, packages, monthlyInstallments } = pricingConfig;

	const calculatePrice = (basePrice: number) => {
		const discountedPrice = discount.enabled
			? basePrice * (1 - discount.percentage / 100)
			: basePrice;

		if (isMonthly) {
			return Math.ceil(discountedPrice / monthlyInstallments);
		}
		return discountedPrice;
	};

	const getOriginalPrice = (basePrice: number) => {
		if (isMonthly) {
			return Math.ceil(basePrice / monthlyInstallments);
		}
		return basePrice;
	};

	return (
		<section id="pricing" className=" relative py-32 sm:py-26 md:py-26 px-4 sm:px-6 lg:px-8 bg-bg">
			<div className="max-w-5xl mx-auto">
				{/* Header */}
				<div className="text-center mb-6 sm:mb-8">
				<p className="font-body text-section-tiny font-medium text-textMuted mb-2">
				Pricing
			</p>
					<h2 className="font-headline text-section-header font-medium text-text mb-1">
						Simple, transparent pricing
					</h2>
					<p className="font-body text-section-tiny font-medium text-gray-500 max-w-sm mx-auto">
						Choose your package. No hidden fees.
					</p>
				</div>

				{/* Toggle Switch */}
				<div className="flex justify-center mb-6">
					<div 
						className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm cursor-pointer select-none"
						onClick={() => setIsMonthly(!isMonthly)}
						role="switch"
						aria-checked={isMonthly}
						aria-label={`Payment plan: ${isMonthly ? 'Monthly' : 'One-time'}`}
						tabIndex={0}
						onKeyDown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								setIsMonthly(!isMonthly);
							}
						}}
					>
						<span className={`text-xs transition-colors ${!isMonthly ? 'text-text font-medium' : 'text-gray-400'}`}>
							One-time
						</span>
						<div className="relative">
							<div className={`w-8 h-4 rounded-full transition-colors ${isMonthly ? 'bg-gray-800' : 'bg-gray-200'}`}>
								<div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-3 w-3 shadow-sm transition-transform ${isMonthly ? 'translate-x-4' : ''}`}></div>
							</div>
						</div>
						<span className={`text-xs transition-colors ${isMonthly ? 'text-text font-medium' : 'text-gray-400'}`}>
							Monthly
						</span>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
					{packages.map((pkg) => {
						const isRecommended = pkg.recommended;
						const currentPrice = calculatePrice(pkg.basePrice);
						const originalPrice = getOriginalPrice(pkg.basePrice);

						return (
							<div
								key={pkg.id}
								className={`relative rounded-lg flex flex-col w-full md:flex-1 md:min-w-0 md:max-w-[320px] lg:max-w-[340px] overflow-hidden ${
									isRecommended
										? 'bg-[#1a1a1a] text-white p-4 md:p-5 border border-gray-700 shadow-lg'
										: 'bg-white text-text p-4 md:p-5 border border-accentSubtle/30 shadow-md hover:shadow-lg transition-all duration-300'
								}`}
							>
								{/* Badge */}
								{pkg.badge && (
									<div className={`inline-flex self-start px-2 py-0.5 rounded text-[10px] font-medium tracking-wide mb-3 ${
										isRecommended
											? 'border border-gray-600 text-gray-300'
											: 'bg-gray-100 text-gray-500'
									}`}>
										{pkg.badge}
									</div>
								)}

								{/* Package Name */}
								<h3 className={`text-base sm:text-lg font-semibold mb-0.5 ${
									isRecommended ? 'text-white' : 'text-text'
								}`}>
									{pkg.name}
								</h3>

								{/* Description */}
								<p className={`text-[11px] mb-4 ${
									isRecommended ? 'text-gray-400' : 'text-gray-500'
								}`}>
									{pkg.description}
								</p>

								{/* Divider */}
								<div className={`border-t mb-4 ${
									isRecommended ? 'border-gray-700' : 'border-gray-100'
								}`}></div>

								{/* Features */}
								<ul className="mb-4 flex-grow space-y-1.5">
									{pkg.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-start gap-2">
											<svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
												isRecommended ? 'text-gray-400' : 'text-gray-400'
											}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
											</svg>
											<span className={`text-[11px] ${
												isRecommended ? 'text-gray-300' : 'text-gray-600'
											}`}>
												{feature}
											</span>
										</li>
									))}
								</ul>

								{/* Divider */}
								<div className={`border-t mb-4 ${
									isRecommended ? 'border-gray-700' : 'border-gray-100'
								}`}></div>

								
								<div className="flex flex-wrap items-center justify-between gap-3 mt-auto min-w-0">
									<div className="min-w-0">
										<div className="flex items-baseline gap-1 flex-wrap">
											{discount.enabled && (
												<span className={`text-[10px] line-through ${
													isRecommended ? 'text-gray-500' : 'text-gray-400'
												}`}>
													${originalPrice.toLocaleString()}
												</span>
											)}
											<span className={`text-lg sm:text-xl font-semibold ${
												isRecommended ? 'text-white' : 'text-text'
											}`}>
												${currentPrice.toLocaleString()}
											</span>
											{isMonthly && (
												<span className={`text-[10px] ${
													isRecommended ? 'text-gray-500' : 'text-gray-400'
												}`}>
													{'/mo'}
												</span>
											)}
										</div>
										<p className={`text-[10px] ${
											isRecommended ? 'text-gray-500' : 'text-gray-400'
										}`}>
											{pkg.deliveryTime}
										</p>
									</div>

									<CTA
										href={pkg.ctaLink}
										variant={isRecommended ? 'primary' : 'dark'}
										size="xs"
										showArrow={true}
										className="gap-1.5 flex-shrink-0"
									>
										{pkg.ctaText}
									</CTA>
								</div>
							</div>
						);
					})}
				</div>

				{/* Secondary CTA to full pricing */}
				<div className="flex justify-center mt-6">
					<CTA
						href="/pricing"
						variant="dark"
						size="xs"
						showArrow={true}
						className="text-[11px]"
					>
						View full pricing & add-ons
					</CTA>
				</div>
			</div>
		</section>
	);
};

export default PricingInteractive;
