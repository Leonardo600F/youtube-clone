import './App-style';
import { MainContainer } from "./App-style";
import { ComponentStorage } from './context/componentContext';
import { UserStorage } from "./context/userContext";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import AppRoutes from "./routes/routes";

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';

  return (
    <ComponentStorage>
      <UserStorage>
        <div className="App">
          {!isAuthPage && <Header />}
          <MainContainer>
            <AppRoutes />
          </MainContainer>
        </div>
      </UserStorage>
    </ComponentStorage>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
} 