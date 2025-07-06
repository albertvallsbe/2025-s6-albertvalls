import type { TutorialStep } from './types/types';
import dataCards from './data/dataCards.json';
import { Card } from './components/Card';
import { useNavigation } from './hooks/useNavigation';

const App = (): JSX.Element => {
	const tutorialData: TutorialStep[] = dataCards;
	const controls = useNavigation(tutorialData);

	return (
		<>
			<Card card={controls.currentStep} controls={controls} />
		</>
	);
};

export default App;
