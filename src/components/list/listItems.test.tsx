import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ListItems from './ListItems';
import type { Budget } from '../../types/types';
import { buildBudgetQuery, type BudgetParams } from '../../utils/urlUtils';

describe('ListItems component', () => {
	// Preparem un <div id="modal-root"> perquè createPortal l'usi
	beforeAll(() => {
		const modalRoot = document.createElement('div');
		modalRoot.setAttribute('id', 'modal-root');
		document.body.appendChild(modalRoot);
	});

	// Neteja automàtica del DOM (inclou portals)
	afterEach(() => {
		cleanup();
	});

	// Eliminem el node de portals quan acaben tots els tests
	afterAll(() => {
		const modalRoot = document.getElementById('modal-root');
		modalRoot?.remove();
	});

	test('open modal on share button click', () => {
		const budgets: Budget[] = [
			{
				id: 'test1',
				clientName: 'Test Client',
				clientMail: 'test@example.com',
				clientPhone: '600000000',
				selectedServices: [
					{ id: '1', name: 'SEO', price: 300 },
					{ id: '3', name: 'Web', price: 500 },
				],
				pages: 2,
				languages: 3,
				total: 950,
				totalItems: 2,
				date: '01/01/2025',
			},
		];

		window.history.pushState({}, '', '/budget');
		render(<ListItems budgets={budgets} />);

		const shareButton = screen.getByRole('button', {
			name: /Compartir pressupost/i,
		});
		fireEvent.click(shareButton);

		// Ara ha d’existir un element amb role="dialog"
		expect(screen.getByRole('dialog')).toBeInTheDocument();
	});

	test('display correct share URL in modal', () => {
		const budgets: Budget[] = [
			{
				id: 'test2',
				clientName: 'Another Client',
				clientMail: 'another@example.com',
				clientPhone: '611111111',
				selectedServices: [{ id: '2', name: 'Ads', price: 400 }],
				total: 400,
				totalItems: 1,
				date: '02/02/2025',
			},
		];

		window.history.pushState({}, '', '/budget');
		render(<ListItems budgets={budgets} />);

		fireEvent.click(
			screen.getByRole('button', { name: /Compartir pressupost/i })
		);

		const params: BudgetParams = {
			seo: false,
			ads: true,
			web: false,
			pages: 1,
			lang: 1,
		};
		const expectedQuery = buildBudgetQuery(params);
		const expectedUrl = `${window.location.origin}${window.location.pathname}?${expectedQuery}`;

		const textarea = screen.getByRole('textbox', {
			name: /Enllaç per compartir el pressupost/i,
		});
		expect(textarea).toHaveValue(expectedUrl);
	});
});
