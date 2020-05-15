import styled, { keyframes } from 'styled-components';

const animDrt = '0.4s';
const animEase = 'cubic-bezier(.6,.05,.15,.95)';

const bouncing = keyframes`
  0% {
		transform: translate3d(0, 4px, 0) scale(1.2, 0.85);
	}

	100% {
		transform: translate3d(0, -12px, 0) scale(0.9, 1.1);
	}
`;


export const Dot = styled.span``;

export const Dots = styled.div`
  width: 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;

  ${Dot} {
    width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #00f1ca;

    &:nth-child(1) {
			animation: ${bouncing} ${animDrt} alternate infinite ${animEase};
		}

		&:nth-child(2) {
			animation: ${bouncing} ${animDrt} 0.1s alternate infinite ${animEase} backwards;
		}

		&:nth-child(3) {
			animation: ${bouncing} ${animDrt} 0.2s alternate infinite ${animEase} backwards;
		}
  }
`;
