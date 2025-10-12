import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Flex, Provider, teamsTheme } from "@fluentui/react-northstar";
import Dashboard from "./page/dashboard/Dashboard";
import Authentification from "./page/authentification/Authentification";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MyProfile } from "./page/profile/MyProfile";
import ProtectedRoute from "./auth/ProtectedRoute";

import styled from "styled-components";
import SideBar from "./sidebar/SideBar";
import { EmployeeManagement } from "./page/employee_management/EmployeeManagement";

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 70px; /* largeur quand sidebar fermée */
  transition: margin-left 0.3s ease;
  /* padding: 2rem; */
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider theme={teamsTheme}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />

        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <MyProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <ProtectedRoute>
                    <EmployeeManagement />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Page login sans sidebar */}
            <Route path="/login" element={<Authentification />} />
          </Routes>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
