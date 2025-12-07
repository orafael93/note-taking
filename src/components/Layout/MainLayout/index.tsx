import { BrowserRouter, Routes, Route } from "react-router";

import { Login } from "@/pages/Login";
import { Sidebar } from "@/components/Layout/Sidebar";
import { AllNotes } from "@/pages/AllNotes";
import { Settings } from "@/pages/Settings";
import { ArchivedNotes } from "@/pages/ArchivedNotes";
import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

import * as S from "./styles";

export const MainLayout = () => (
  <S.Container>
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/archived" element={<ArchivedNotes />} />
        <Route path="*?" element={<AllNotes />} />
      </Routes>

      <BottomNavigation />
    </BrowserRouter>
  </S.Container>
);
