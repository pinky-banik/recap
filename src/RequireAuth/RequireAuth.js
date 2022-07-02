import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useLocation,Navigate} from 'react-router-dom';
import app from '../Firebase/Firebase.init';


const RequireAuth = ({children}) => {
    const auth = getAuth(app);
    const location = useLocation();
    const [user] = useAuthState(auth);
    if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;