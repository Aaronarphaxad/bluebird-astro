// Initialize animations on page load
const initAnimations = () => {
	// Setup smooth scroll behavior
	const handleAnchorLinks = () => {
		document.addEventListener('click', (e) => {
			const target = e.target;
			const link = target.closest('a[href^="#"]');

			if (link && link.href.includes('#')) {
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

	// Setup intersection observer for scroll animations
	const setupScrollAnimations = () => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px',
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					// Only observe once
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		// Observe all elements with data-animate attribute
		document.querySelectorAll('[data-animate]').forEach((el) => {
			observer.observe(el);
		});
	};

	// Initialize
	handleAnchorLinks();
	setupScrollAnimations();

	// Reinitialize on dynamic content if needed
	window.addEventListener('astro:page-load', () => {
		handleAnchorLinks();
		setupScrollAnimations();
	});
};

// Run on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAnimations);
} else {
	initAnimations();
}
