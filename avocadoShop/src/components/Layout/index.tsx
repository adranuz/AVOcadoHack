import React, { FC, ReactNode } from "react";
import Navbar from "@components/Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<footer>This is the footer</footer>
		</>
	);
};

export default Layout;
