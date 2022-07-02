import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-black text-white p-5'>
            <nav>
            <Link className='px-2' to ="/">Home</Link>
            <Link className='px-2' to ="/orders">Orders</Link>
            <Link className='px-2' to ="/register">Sign Up</Link>
            {
                user?.uid ? <button onClick={()=>signOut(auth)} className='bg-red-600 p-2 rounded-2xl hover:bg-red-700'>SignOut</button>:
                <Link className='px-2' to ="/login">Login</Link>
            }
            <span className='text-white'>{user?.displayName}</span>
            
            </nav>
        </div>
    );
};

export default Header;