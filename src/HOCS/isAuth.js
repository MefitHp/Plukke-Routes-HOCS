import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function isAuth(WrappedComponent) {
	return (props) => {
		const [ isAuth, setIsAuth ] = useState(true);
		//usar amplify
		useEffect(() => {
			console.log('chachaloka');
			setIsAuth(Math.random() < 0.5 && true);
		}, []);

		console.log(isAuth);
		if (isAuth)
			return (
				<React.Fragment>
					<WrappedComponent isAuth={isAuth} {...props} />
				</React.Fragment>
			);

		return <Redirect to="/" />;
	};
}
