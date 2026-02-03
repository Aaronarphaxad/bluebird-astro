// Smooth scroll utility for anchor links
export const setupSmoothScroll = () => {
	document.documentElement.style.scrollBehavior = 'smooth';

	// Handle anchor links
	document.addEventListener('click', (e) => {
		const target = e.target as HTMLElement;
		const link = target.closest('a[href^="#"]');
		
		if (link) {
			const href = link.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		}
	});
};

// Add scroll animation class when element enters viewport
export const setupScrollAnimations = () => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
				}
			});
		},
		{ threshold: 0.1 }
	);

	document.querySelectorAll('[data-animate]').forEach((el) => {
		observer.observe(el);
	});
};

// Initialize all interactions
export const initializeAnimations = () => {
	setupSmoothScroll();
	setupScrollAnimations();
};
