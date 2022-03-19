import '../styles/globals.css';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthActions from '../store/auth';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const path = location.pathname;
		if (path !== '/logout') store.dispatch(AuthActions.getUser());
	}, []);

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
