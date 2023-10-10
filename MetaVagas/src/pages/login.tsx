// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { BannerLogin } from "../components/bannerLogin";
import { Header } from "../components/header";


export const Login = () => {
    // const [email, setEmail] = useState('mscarvalhaes@hotmail.com')
    // const [password, setPassword] = useState('123456')
    // const navigate = useNavigate()
    return (
        <>
           <Header />
           <BannerLogin />
        </>
    )
}

export default Login;