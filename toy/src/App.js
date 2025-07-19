import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Home/Menu.jsx";
import Search from "./pages/Home/Search.jsx";
import Scrap from "./pages/Home/Scrap.jsx";
import First from "./pages/Home/First.jsx";

import Post from "./pages/Project/Post.jsx";
import Temp from "./pages/Project/Temp.jsx";
import Trash from "./pages/Project/Trash.jsx";
import Project from "./pages/Project/Project.jsx";
import ProjectDetail from "./pages/Project/Project_detail.jsx";

import Find from "./pages/FindTeam/FindTeam.jsx";
import Detail from "./pages/FindTeam/Find_detail.jsx";
import AddGroup from "./pages/FindTeam/AddGroup.jsx";

import LogIn from "./pages/Login/LogIn.jsx";
import SignUp_agree from "./pages/Login/SignUp_agree.jsx";
import SignUp from "./pages/Login/SignUp.jsx";
import SignUp_complete from "./pages/Login/SignUp_complete.jsx";

import Profile from "./pages/My/profile.jsx";
import Profile_edit from "./pages/My/Profile_edit.jsx";

import Group from "./pages/Group/Group";
import MyGroup from "./pages/Group/My_group";
import GroupDetail from "./pages/Group/Group_detail";
import MyGroupDetail from "./pages/Group/My_group_detail";
import Progress from "./pages/Group/Progress";
import CreateGroup from "./pages/Group/Create_group";

function App() {
  /*const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);
  */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup_agree" element={<SignUp_agree />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_complete" element={<SignUp_complete />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile_edit" element={<Profile_edit />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project_detail" element={<ProjectDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/first" element={<First />} />
        <Route path="/post" element={<Post />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/find" element={<Find />} />
        <Route path="/addGroup" element={<AddGroup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/group" element={<Group />} />
        <Route path="/mygroup" element={<MyGroup />} />
        <Route path="/group_detail" element={<GroupDetail />} />
        <Route path="/my_group_detail" element={<MyGroupDetail />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/create_group" element={<CreateGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
