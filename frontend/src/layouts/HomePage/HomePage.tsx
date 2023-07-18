import React from 'react';
import { Explore } from './components/Explore';
import Heros from './components/Heros';
import { Services } from './components/Services';

export const HomePage = () => {
	return (
		<>
			<Explore />
			<Heros />
			<Services />
		</>
	);
};
