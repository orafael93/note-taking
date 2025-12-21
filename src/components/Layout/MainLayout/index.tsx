import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { Tag } from "@/pages/Tag";
import { Sidebar } from "@/components/Layout/Sidebar";
import { AllNotes } from "@/pages/AllNotes";
import { Settings } from "@/pages/Settings";
import { ShowAllTags } from "@/pages/ShowAllTags";
import { PrivatePage } from "@/components/PrivatePage";
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
        <Route
          path="/"
          element={
            <PrivatePage>
              <AllNotes />
            </PrivatePage>
          }
        />
        <Route
          path="/archived"
          element={
            <PrivatePage>
              <ArchivedNotes />
            </PrivatePage>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivatePage>
              <Settings />
            </PrivatePage>
          }
        />
        <Route
          path="/tags"
          element={
            <PrivatePage>
              <ShowAllTags />
            </PrivatePage>
          }
        />
        <Route
          path="/tags/*"
          element={
            <PrivatePage>
              <Tag />
            </PrivatePage>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="*?" element={<h1>NOT FOUND</h1>} />
      </Routes>

      <BottomNavigation />
    </BrowserRouter>
  </S.Container>
);
