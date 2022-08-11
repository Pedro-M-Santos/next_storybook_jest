import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@components/generics/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="flex flex-col">
			<Header
				onCreateAccount={() => console.log("createAccount")}
				onLogin={() => console.log("login")}
				onLogout={() => console.log("logout")}
			/>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
