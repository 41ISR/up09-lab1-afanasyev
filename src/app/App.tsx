import { ReactNode } from "react";
import "./App.css";
import Like from "../shared/svg/Like";
import { Link } from "react-router";
import Search from "../shared/svg/Search";

interface LayoutProps {
  children: ReactNode;
}

function App({ children }: LayoutProps) {
  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <p className="header__title">ФильмоПоиск</p>
        </Link>
        <div className="header__icons">
          <Link className="header__icon" to="/liked">
            <Like></Like>
          </Link>
          <Link className="header__icon" to="/search">
            <Search></Search>
          </Link>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}

export default App;
