import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { Sidebar } from "@/components/Layout/Sidebar";
import { AllNotes } from "@/pages/AllNotes";
import { Settings } from "@/pages/Settings";
import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

const Login = lazy(() => import("@/pages/Login"));
const ArchivedNotes = lazy(() => import("@/pages/ArchivedNotes"));
const CreateAccount = lazy(() => import("@/pages/CreateAccount"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));

import * as S from "./styles";

export const MainLayout = () => (
  <S.Container>
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/archived" element={<ArchivedNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*?" element={<AllNotes />} />
      </Routes>

      <BottomNavigation />
    </BrowserRouter>
  </S.Container>
);
