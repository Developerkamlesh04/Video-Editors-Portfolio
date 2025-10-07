import React from "react";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
