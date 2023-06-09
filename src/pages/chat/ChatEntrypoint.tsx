import React from 'react';
import ReactDOM from 'react-dom/client';

import Chat from './Chat';
import Layout from '../Layout';

import '../index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Layout>
			<Chat />
		</Layout>
	</React.StrictMode>,
);
