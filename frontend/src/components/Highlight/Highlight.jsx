import { useEffect, useRef } from 'react';
import './Highlight.scss';

export default function Highlight({ tag: Tag = 'h2', children, className, small }) {

    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (elementRef.current) {
                    const highlightElement = elementRef.current.nextSibling; 
                    highlightElement.style.width = entry.isIntersecting ? '100%' : '30%';
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <>
            <Tag ref={elementRef} className={className}>{children}</Tag>
            <div className={`highlight ${small ? "highlight--small" : ""}`}></div>
        </>
    );
}