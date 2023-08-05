import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnnounceWrite } from "../Pages/AnnounceWrite";
import { StudentDetail } from "../Pages/StudentDetail";
import { Announcement } from "../Pages/Announcement";
import { StudentList } from "../Pages/StudentList";
import { MyProfile } from "../Pages/MyProfile";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Main } from "../Pages/Main";
import { Layout } from "./Layout";

export const Router = () => {
  const accessToken = localStorage.getItem("accessToken");
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout Layout={accessToken? true : false} />}>
        <Route path="/" element={accessToken? <Main /> : <Login/>} />
        <Route path="/Announcement" element={accessToken? <Announcement /> : <Login />} />
        <Route path="/AnnounceWrite" element={accessToken? <AnnounceWrite /> : <Login />} />
        <Route path="/StudentDetail" element={accessToken? <StudentDetail /> : <Login />} />
        <Route path="/StudentList" element={accessToken? <StudentList /> : <Login />} />
        <Route path="/MyProfile" element={accessToken? <MyProfile /> : <Login />} />
      </Route>
      <Route path="/Login" element={!accessToken? <Login /> : undefined} />
      <Route path="/SignUp" element={!accessToken? <Register /> : undefined} />
    </Routes>
  </BrowserRouter>
}