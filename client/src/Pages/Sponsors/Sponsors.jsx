import React, { useEffect, useRef } from 'react';
import './Sponsors.css';

const logos = [
	'amul-logo.png',
	'Krafton Logo.jpg',
	'B Natural logo.jpeg',
	'barista_logo.jpg',
	'bisleri_logo.png',
	'cafe-coffee-day-logo.png',
	'CESC_logo.png',
	'coal_india_limited_logo.avif',
	'edudite_logo.png',
	'Fleapo Logo.png',
	'Friends Pizza Logo.png',
	'GateForum Logo.jpeg',
	'LOreal-Symbol.jpg',
	'Nodwin Gaming Logo.png',
	'redFM logo.jpeg',
	'Wow Momo Logo.png'
];

function useRevealGrid(ref) {
	useEffect(() => {
		if (!ref.current) return;
		const items = ref.current.querySelectorAll('.sponsor-item');
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('reveal');
				});
			},
			{ threshold: 0.12 }
		);
		items.forEach((it) => obs.observe(it));
		return () => obs.disconnect();
	}, [ref]);
}

const tidyName = (file) => {
	const base = file.replace(/\.[^.]+$/, '');
	if (/coal[_-]?india/i.test(base)) return 'Coal India Limited';
	const cleaned = base.replace(/[-_]/g, ' ')
		.replace(/\b(logo|symbol|limited|india)\b/gi, '')
		.trim();
	// Title-case the cleaned name
	return cleaned.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const Sponsors = () => {
	const gridRef = useRef(null);
	useRevealGrid(gridRef);

	return (
		<main className="sponsors-page">
			<header className="sponsors-hero">
				<h1 className="sponsors-heading">OUR SPONSORS</h1>
				<p className="sponsors-sub">Proud partners who make this event possible</p>
			</header>

			<section className="sponsors-list">
				<div className="sponsors-grid" ref={gridRef}>
					{logos.map((file, i) => (
						<figure key={i} className="sponsor-item">
							<img
								className="sponsor-img"
								src={`/assets/logo/${file}`}
								alt={tidyName(file)}
							/>
							<figcaption className="sponsor-caption">{tidyName(file)}</figcaption>
						</figure>
					))}
				</div>
			</section>
		</main>
	);
};

export default Sponsors;
