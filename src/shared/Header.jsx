import { hot } from 'react-hot-loader/root';
import * as React from 'react';

function HeaderComponent() {
	// const [state, setState] = React.useState(false);
	return (
		<header>
			<h2>Skillbox lessons started!</h2>
			{/* <button onClick={() => setState(!state)}> */}
			{/* {state ? "hide" : "show"} */}
			{/* </button> */}
			{/* {state && <h3> Here i'm</h3>} */}
			<p>It replace code without page reloading</p>
		</header>
	);
}

// export default HeaderComponent;
export default hot(HeaderComponent);
