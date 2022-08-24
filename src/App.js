import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import MyPosts from './components/MyPosts/MyPosts';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav friends={props.state.friendsBlock} />
        <Profile />
        <Routes>
        <Route path='/myposts' element={<MyPosts myposts={props.state.myposts} addNPost={props.addNPost} />} />
        <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogs} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;