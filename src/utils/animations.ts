// Framer Motion animation variants for Astro components
export const fadeInUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeInDown = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeInLeft = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const fadeInRight = {
	hidden: { opacity: 0, x: 20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const scaleIn = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const staggerItem = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};

export const hoverScale = {
	whileHover: {
		scale: 1.05,
		transition: { duration: 0.3 },
	},
};

export const hoverLift = {
	whileHover: {
		y: -5,
		boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
		transition: { duration: 0.3 },
	},
};

export const tapScale = {
	whileTap: {
		scale: 0.95,
		transition: { duration: 0.2 },
	},
};
