import React from 'react'
import { ThemeProvider, CSSReset} from "@chakra-ui/core";

export default function BaseLayout(props) {
	return (
		<ThemeProvider>
			<CSSReset />
			{props.children}
		</ThemeProvider>	
	)
}