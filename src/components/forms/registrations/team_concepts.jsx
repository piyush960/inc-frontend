import '../styles/event_registrations.css';
import React from 'react';

function TeamConcepts() {
    return (
        <div className='bg-red-400 mx-16 my-6'>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mx-12 my-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="college">
                        college
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="college" type="text" placeholder="College" required />
                </div>
            </form>
        </div>
    );
}

export default TeamConcepts;