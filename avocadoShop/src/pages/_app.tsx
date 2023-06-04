import Layout from "@components/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	// Providers - Context/Providers, Theme, data
	// Layout
	// props adicionales
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
