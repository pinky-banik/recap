import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from './../Hooks/useFirebase';

const Header = () => {
    const{user,handleSignOut} = useFirebase();
    return (
        <div className='bg-black text-white p-5'>
            <nav>
            <Link className='px-2' to ="/">Home</Link>
            
            <Link className='px-2' to ="/register">Sign Up</Link>
            {
                user?.uid ? <button onClick={handleSignOut} className='bg-red-600 p-2 rounded-2xl hover:bg-red-700'>SignOut</button>:
                <Link className='px-2' to ="/login">Login</Link>
            }
            <span className='text-white'>{user?.displayName}</span>
            
            {/* <Link className='px-2' to ="/products">Products</Link>
            <Link className='px-2' to ="/reviews">Reviews</Link>
            <Link className='px-2' to ="/orders">Orders</Link> */}
            </nav>
        </div>
    );
};

export default Header;