import React from 'react'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export default function BaseLayout(props) {
	return (
		<ThemeProvider>
			<CSSReset />
			<p>Teste</p>
			{props.children}
		</ThemeProvider>	
	)
}