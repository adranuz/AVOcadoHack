import React, { FC, ReactNode } from "react";
import Navbar from "@components/Navbar";
// css modules
import styles from "./styles.module.css"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="container">
			<div className={styles.border}>

			<Navbar />
			{children}
			<footer className="footer">This is the footer</footer>

			{/* Styled JSX */}
			{/* Crea clases con hashes de manera que los estilos solo sean aplicados al componente donde es usado */}
			<style jsx>{`
        footer {
          background: teal;
        }
				.footer {
					border: 2px dotted black;
				}
      `}</style>
			</div>
		</div>
	);
};

export default Layout;
