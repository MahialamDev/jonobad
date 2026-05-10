import React, { Suspense } from 'react';
import LoginPage from './LoginPage';

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginPage/>
        </Suspense>
    );
};

export default page;