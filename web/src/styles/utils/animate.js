import { keyframes } from 'styled-components';

/**
 * Handy CSS animations
 * for micro-interactions
 */

export const easing = {
  rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)',
};

export const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
