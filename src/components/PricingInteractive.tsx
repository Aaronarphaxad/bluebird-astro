import React, { useState, useEffect } from 'react';
import CTA from './ui/CTA';

// ============================================
// PRICING DATA - Easy to update/transfer to CMS
// ============================================
export const pricingConfig = {
	// Global discount settings
	discount: {
		enabled: true,
		percentage: 20,
		label: "20% OFF"
	},

	// Payment terms
	monthlyInstallments: 12,

	// Packages
	packages: [
		{
			id: "essential",
			name: "Essential",
			badge: null,
			recommended: false,
			description: "Online presence, fast",
			deliveryTime: "2 weeks",
			basePrice: 2100,
			features: [
				"Beautiful landing page",
				"Up to 4 pages",
				"Form setup",
				"Basic SEO",
				"Mobile responsive"
			],
			ctaText: "Get started",
			ctaLink: "/contact"
		},
		{
			id: "signature",
			name: "Signature",
			badge: "MOST POPULAR",
			recommended: true,
			description: "Advanced site with unique brand",
			deliveryTime: "3-4 weeks",
			basePrice: 3700,
			features: [
				"Everything in Essential",
				"Up to 10 pages",
				"Custom animations",
				"Advanced SEO",
				"CMS setup",
				"$300/extra page"
			],
			ctaText: "Get started",
			ctaLink: "/contact"
		},
		{
			id: "enterprise",
			name: "Enterprise",
			badge: null,
			recommended: false,
			description: "Complete cinematic solution",
			deliveryTime: "4-6 weeks",
			basePrice: 5900,
			features: [
				"Everything in Signature",
				"Up to 20 pages",
				"Cinematic interactions",
				"SEO + AI SEO",
				"Figma design files",
				"$300/extra page"
			],
			ctaText: "Get started",
			ctaLink: "/contact"
		}
	],

	// Add-ons (for full pricing page)
	addons: [
		{
			id: "crm",
			name: "CRM/Automation",
			description: "Help businesses improve their operations using tools like Notion, Zapier, etc.",
			price: 1000
		},
		{
			id: "copywriting",
			name: "Copywriting for websites",
			description: "Professional copywriting services for your website",
			price: 400
		},
		{
			id: "custom-software",
			name: "Custom software",
			description: "Using tools like NextJS, React Native, Python, PHP, I can build clients custom solutions for their business needs",
			price: null,
			customPrice: "Custom quote"
		},
		{
			id: "retainer",
			name: "Retainer/Maintenance",
			description: "Hosting, occasional content updates, performance monitoring, general support, automation updates/help",
			priceRange: { min: 150, max: 300 },
			billingCycle: "month"
		}
	],

	customNote: "Need custom software? Let's discuss your requirements."
};

// ============================================
// PRICING COMPONENT
// ============================================
const PricingInteractive: React.FC = () => {
	const [isMonthly, setIsMonthly] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { discount, packages, monthlyInstallments, addons } = pricingConfig;

	// Handle Escape key to close modal
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isModalOpen]);

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

				{/* Discount + Secondary CTA */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
					{discount.enabled && (
						<span className="text-[11px] text-gray-500">
							{discount.label} applied to all packages
						</span>
					)}
					<span className="hidden sm:inline text-gray-300">·</span>
					<button
						onClick={() => setIsModalOpen(true)}
						className="text-[11px] text-gray-600 hover:text-accent transition-colors cursor-pointer"
						aria-label="View full pricing and add-ons"
						type="button"
					>
						View full pricing & add-ons →
					</button>
				</div>
			</div>

			{/* Add-ons Modal */}
			{isModalOpen && (
				<div 
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
					onClick={() => setIsModalOpen(false)}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-title"
					aria-describedby="modal-description"
				>
					<div 
						className="bg-[#f5f5f5] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="sticky top-0 bg-[#f5f5f5] border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
							<div>
								<h3 className="font-headline text-xl sm:text-2xl font-semibold text-text mb-1">
									Additional Services & Add-ons
								</h3>
								<p className="text-xs text-gray-500">
									Enhance your package with these services
								</p>
							</div>
					<button
						onClick={() => setIsModalOpen(false)}
						className="text-gray-400 hover:text-gray-600 transition-colors p-2"
						aria-label="Close add-ons modal"
						type="button"
					>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>

						{/* Modal Content */}
						<div className="p-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								{addons.map((addon) => (
									<div
										key={addon.id}
										className="bg-white rounded-lg p-5 border border-accentSubtle/30 shadow-md hover:shadow-lg transition-all duration-300"
									>
										{/* Add-on Name */}
										<h4 className="text-base sm:text-lg font-semibold text-text mb-1">
											{addon.name}
										</h4>

										{/* Description */}
										<p className="text-[11px] text-gray-600 mb-4">
											{addon.description}
										</p>

										{/* Divider */}
										<div className="border-t border-gray-100 mb-4"></div>

										{/* Price */}
										<div className="flex items-center justify-between">
											<div>
												{addon.price ? (
													<span className="text-lg sm:text-xl font-semibold text-text">
														${addon.price.toLocaleString()}
													</span>
												) : addon.priceRange ? (
													<div>
														<span className="text-lg sm:text-xl font-semibold text-text">
															${addon.priceRange.min.toLocaleString()}-${addon.priceRange.max.toLocaleString()}
														</span>
														{addon.billingCycle && (
															<span className="text-[10px] text-gray-400 ml-1">
																{'/'}{addon.billingCycle}
															</span>
														)}
													</div>
												) : addon.customPrice ? (
													<span className="text-lg sm:text-xl font-semibold text-text">
														{addon.customPrice}
													</span>
												) : null}
											</div>
										</div>
									</div>
								))}
							</div>

							{/* CTA Section */}
							<div className="border-t border-gray-200 pt-6 text-center">
								<p className="text-sm text-gray-600 mb-4">
									Ready to get started? Let's discuss your needs.
								</p>
								<CTA
									href="/contact"
									variant="primary"
									size="md"
									showArrow={true}
								>
									Get in touch
								</CTA>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default PricingInteractive;
