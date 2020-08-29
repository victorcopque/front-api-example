import React from 'react';
import { ThemeProvider, CSSReset, Box, Image, Badge } from "@chakra-ui/core";

export default function BoxExample(props) {

  return (
    <ThemeProvider>
      <CSSReset />
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <p>{props.children}</p>
      </Box>
    </ThemeProvider>
  );
}