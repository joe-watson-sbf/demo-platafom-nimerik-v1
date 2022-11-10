import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EgzesisLayout from './components/EgzesisLayout'
import EgzesisLekti from './pages/egzesis/EgzesisLekti'
import Home from './pages/home/Home'
import JenerikPaj from './pages/jenerik/JenerikPaj'
import Login from './pages/login/Login'
import { AuthContext } from "./context/AuthContext";


const App = () => {


    const { currentUser } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to={"/login"} />;
    };

    
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={<Login />} />
                    <Route path='' element={<RequireAuth>  <Home /> </RequireAuth>} />
                    <Route path='1e-af'>
                        <Route index element={<RequireAuth> <JenerikPaj btnText={'Al Nan Klas La'} kle={'matye'} displayColumn title='MATYÈ YO' klas={'1e AF'} /> </RequireAuth> } />
                        <Route path='kominikasyon-kreyol' >
                            <Route index element={<RequireAuth> <JenerikPaj kle={'sekans'} btnText={'Al Nan Egzèsis Yo'} displayColumn={true} klas={'1e AF'} title='SEKANS YO' /> </RequireAuth> } />
                            <Route path='lekti' element={<RequireAuth> <EgzesisLayout> <EgzesisLekti /> </EgzesisLayout></RequireAuth> } />
                            <Route path='otograf' element={<RequireAuth> <EgzesisLayout /> </RequireAuth> } />
                        </Route>

                        <Route path='communication-francaise' element={<RequireAuth> <EgzesisLayout><h1 className='W-100 text-center p-12'>Communication francaise</h1></EgzesisLayout> </RequireAuth> } />
                        <Route path='matematik' element={<RequireAuth>  <EgzesisLayout><h1 className='W-100 text-center p-12'>Matematik</h1></EgzesisLayout> </RequireAuth> } />
                        <Route path='syans-sosyal' element={<RequireAuth> <EgzesisLayout><h1 className='W-100 text-center p-12'>Syans Sosyal</h1></EgzesisLayout> </RequireAuth> } />
                        <Route path='syans-esperimantal' element={<RequireAuth> <EgzesisLayout><h1 className='W-100 text-center p-12'>Syans esperimantal</h1></EgzesisLayout> </RequireAuth> } />
                    </Route>

                    <Route path='2e-af' element={<RequireAuth> <JenerikPaj klas={'2e AF'} title='MATYÈ YO'> <h1 className='W-100 text-center p-12'>2E AF</h1> </JenerikPaj> </RequireAuth> } />
                    <Route path='3e-af' element={<RequireAuth> <JenerikPaj klas={'3e AF'} title='MATYÈ YO'> <h1 className='W-100 text-center p-12'>3E AF</h1> </JenerikPaj> </RequireAuth> } />
                    <Route path='4e-af' element={<RequireAuth> <JenerikPaj klas={'4e AF'} title='MATYÈ YO'> <h1 className='W-100 text-center p-12'>4E AF</h1> </JenerikPaj> </RequireAuth> } />
                    <Route path='5e-af' element={ <RequireAuth> <JenerikPaj klas={'5e AF'} title='MATYÈ YO'> <h1 className='W-100 text-center p-12'>5E AF</h1> </JenerikPaj> </RequireAuth> }/>
                    <Route path='6e-af' element={<RequireAuth> <JenerikPaj klas={'6e AF'} title='MATYÈ YO'> <h1 className='W-100 text-center p-12'>6E AF</h1> </JenerikPaj> </RequireAuth> } />
                    <Route path='*' element={ <RequireAuth> <JenerikPaj> <h1 className='W-100 text-center p-12'>PAJ SA A POKO KREYE</h1> </JenerikPaj> </RequireAuth> } />
                </Routes>


            </BrowserRouter>
        </div>

    )
}

export default App