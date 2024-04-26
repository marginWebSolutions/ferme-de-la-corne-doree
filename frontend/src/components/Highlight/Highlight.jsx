import { useEffect, useRef } from 'react';
import './Highlight.scss';

export default function Highlight({
	tag: Tag = 'h2',
	children,
	className,
	small,
}) {
	const elementRef = useRef(null);

	useEffect(() => {
		const currentElementRef = elementRef.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (currentElementRef) {
					const highlightElement = currentElementRef.nextSibling;
					highlightElement.style.width = entry.isIntersecting
						? '100%'
						: '30%';
				}
			},
			{
				threshold: 0.5,
			}
		);

		if (currentElementRef) {
			observer.observe(currentElementRef);
		}

		return () => {
			if (currentElementRef) {
				observer.unobserve(currentElementRef);
			}
		};
	}, []);

	return (
		<>
			<Tag ref={elementRef} className={className}>
				{children}
			</Tag>
			<div
				className={`highlight ${small ? 'highlight--small' : ''}`}
			></div>
		</>
	);
}
