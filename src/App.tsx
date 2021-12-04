import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Musik/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';

function App(props: any) {
    console.log(props.state)
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}/>}/>

                        <Route path='/dialogs*' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                  addMessage={props.addMessage}
                                                                  updateNewMessage={props.updateNewMessage}/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friends' element={<Friends messages={props.state.messages}/>}/>
                    </Routes>
                </div>
            </div>

    );
}

export default App;
