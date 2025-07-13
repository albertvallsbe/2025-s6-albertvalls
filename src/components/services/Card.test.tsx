import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';
import type { NavigationControls, ItemCard } from '../../types/types';

describe('Card component on initial step', () => {
	const stepData: ItemCard = {
		id: 1,
		title: 'Servei de prova',
		description: 'Descripció de prova',
		price: 100,
	};

	const controls: NavigationControls = {
		checked: false,
		onToggle: jest.fn(),
	};
	test('renders title, description, only the next button, and calls next()', () => {
		render(<Card card={stepData} controls={controls} />);

		expect(screen.getByText('Servei de prova')).toBeInTheDocument();
		expect(screen.getByText('Descripció de prova')).toBeInTheDocument();
		expect(screen.getByText('100€')).toBeInTheDocument();

		const checkbox = screen.getByRole('checkbox', {
			name: /Afegir Servei de prova/i,
		});
		expect(checkbox).not.toBeChecked();

		fireEvent.click(checkbox);
		expect(controls.onToggle).toHaveBeenCalledWith(1, true);
	});
});
