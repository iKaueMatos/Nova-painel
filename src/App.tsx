import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/styles/default";
import { GlobalStyled } from "./assets/styles/global";
import { Container } from "./layout/DefaultLayout/style";
import { AppRouter } from "./router/router";
const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyled />
        <Container>
          <AppRouter />
        </Container>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
