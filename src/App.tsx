import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./Pages/Home.tsx";
import Login from "./Pages/Login.tsx";
import BACKEND_URL from "./utils/config";

const apolloClient = new ApolloClient({
  uri: BACKEND_URL,
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);
function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
