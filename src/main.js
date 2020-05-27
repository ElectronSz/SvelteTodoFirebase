import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		user: { id: 1, fname: "Musa", lname: "Dlamini" }
	}
});

export default app;