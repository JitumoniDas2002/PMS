import React from 'react'

export default function Logout() {

    const handleLogOut = async () => {
        // remove token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        // redirect to login page
        window.location.href = '/';
    }

    return (
        <div>
            <h1>Logout</h1>
            <button className='btn btn-danger' onClick={handleLogOut}>
                Logout
            </button>
        </div>
    )
}