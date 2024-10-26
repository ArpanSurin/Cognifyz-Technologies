import React, { useState } from 'react';
import Form from './Form';

const Frontpage = () => {
    const today = new Date();
    const [showForm, setShowForm] = useState(false);

    const handleSignInClick = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className="h-auto">
                <header className="bg-white shadow w-auto p-6">
                    <h1 className="text-2xl font-semibold text-gray-900">My Website</h1>
                </header>
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <main className="text-white space-y-4 flex flex-col justify-center items-center text-center">
                        <h1 className="font-bold text-5xl">Hello, My name is Arpan</h1>
                        <p className="text-2xl">I am an Computer Science engineering student, with interest in Machine Learning and Web Development.</p>
                        <button
                            onClick={handleSignInClick}
                            className="border-4 p-4 text-xl rounded-lg text-white hover:bg-gray-700 transition duration-300 ease-in-out backdrop-blur-md font-bold"
                        >
                            Sign In
                        </button>
                    </main>
                </div>
                <footer className="align-bottom py-3">
                    <span className="flex justify-center">
                        Copyright &copy; {today.getFullYear()} | All Rights Reserved
                    </span>
                </footer>
            </div>
            {showForm && <Form closeForm={closeForm} />}
        </>
    );
}

export default Frontpage;
