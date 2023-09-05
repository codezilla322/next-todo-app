"use client";

import { Provider } from "react-redux";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { reduxStore } from "../lib/redux";

export const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export const ChakraUIProvider = (props: React.PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider>{props.children}</ChakraProvider>
    </CacheProvider>
  );
};
