import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route,  Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import PostDetails from './components/PostDetails/PostDetails';


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
   
    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" element = {<Navigate to="/posts" />} />
                    <Route path="/posts" exact element={<Home />} />
                    <Route path="/posts/search" exact element={<Home />} />
                    <Route path="/auth" element = {!user ? <Auth /> : <Navigate to="/posts" />} />
                    <Route path="/new" element = {<Form />} />
                    <Route path="/edit/:id" element = {<Form />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                </Routes>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;