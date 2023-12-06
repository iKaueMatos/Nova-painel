import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Container } from "./layout/components";
import { AppRouter } from "./router/router";
import "./styles/global.scss";
const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <AppRouter />
      </Container>
    </QueryClientProvider>
  )
}
