import { Header, AppRouter } from "./components";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <AppRouter />
      </BrowserRouter>
    </>
  );
}
