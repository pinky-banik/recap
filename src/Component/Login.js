import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='w-1/2 mx-auto'>
            <h1>Please Login</h1>
            <form>
            <input className='border focus:outline-none py-1 m-3' type="text" placeholder='Your Name' />
            <br />
            <input className='border focus:outline-none py-1 m-3' type="email" placeholder='Your Email' />
            <br />
            <input className='border focus:outline-none py-1 m-3' type="password" placeholder='Password' />
            <br />
            <button className='border focus:outline-none p-3 bg-green-600 m-3' type="Submit">Submit</button>
           </form>
           <button onClick={()=> signInWithGoogle()} className='bg-orange-300 p-3 rounded-2xl'>Sign In using Google</button>
        </div>
    );
};

export default Login;