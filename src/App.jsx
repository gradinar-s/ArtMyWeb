import React from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { UsersPage } from "./pages/UsersPage";
import { NonExistentPage } from "./pages/NonExistentPage";

const App = () => {
  return (
    <Container sx={{ pt: "1.5rem" }}>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NonExistentPage />} />
      </Routes>
    </Container>
  );
};

export default App;
