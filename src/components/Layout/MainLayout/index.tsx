import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { AllNotes } from "@/pages/AllNotes";
import { Sidebar } from "@/components/Layout/Sidebar";

const Login = lazy(() => import("@/pages/Login"));
const Settings = lazy(() => import("@/pages/Settings"));
const ArchivedNotes = lazy(() => import("@/pages/ArchivedNotes"));
const CreateAccount = lazy(() => import("@/pages/CreateAccount"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"));

import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

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
