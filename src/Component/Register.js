import React from 'react';

const Register = () => {
    return (
        <div className='w-1/2 mx-auto'>
           <h1>Please Register</h1>
           <form>
            <input className='border focus:outline-none py-1 m-3' type="text" placeholder='Your Name' />
            <br />
            <input className='border focus:outline-none py-1 m-3' type="email" placeholder='Your Email' />
            <br />
            <input className='border focus:outline-none py-1 m-3' type="password" placeholder='Password' />
            <br />
            <button className='border focus:outline-none p-3 rounded-2xl bg-green-600 m-3' type="Submit">Submit</button>
           </form>
           
        </div>
    );
};

export default Register;