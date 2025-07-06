import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import type { NavigationControls, ItemCard } from '../types/types';

describe('Card component on initial step', () => {
	const stepData: ItemCard = {
		title: 'Pas de prova',
		description: 'Descripció de prova',
	};

	const controls: NavigationControls = {
		stepIndex: 0,
		currentStep: stepData,
		totalSteps: 3,
		isFirst: true,
		isLast: false,
		next: jest.fn(),
		prev: jest.fn(),
		goTo: jest.fn(),
		direction: 'next',
	};

	test('renders title, description, only the next button, and calls next()', () => {
		render(<Card card={stepData} controls={controls} />);

		expect(screen.getByText('Pas de prova')).toBeInTheDocument();
		expect(screen.getByText('Descripció de prova')).toBeInTheDocument();

		expect(screen.queryByText('←')).toBeNull();

		const nextBtn = screen.getByText('→');
		expect(nextBtn).toBeInTheDocument();

		fireEvent.click(nextBtn);
		expect(controls.next).toHaveBeenCalledTimes(1);
	});
});
