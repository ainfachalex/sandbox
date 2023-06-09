import React from 'react';
import ReactDOM from 'react-dom/client';

import Files from './Files';
import Layout from '../Layout';

import '../index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Layout>
			<Files />
		</Layout>
	</React.StrictMode>,
);
