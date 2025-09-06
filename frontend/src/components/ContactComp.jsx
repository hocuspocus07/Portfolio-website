import React, { useState } from "react";

export default function ContactComp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('MESSAGE_SENT_SUCCESSFULLY!');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('ERROR: FAILED_TO_SEND_MESSAGE');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('ERROR: NETWORK_ISSUE');
        }
    };

    return (
        <div className='w-screen items-center mt-10 sm:mt-4 min-h-screen py-12'>
            <div className="max-w-md mx-auto p-8 bg-black/40 border border-green-700/30 rounded-lg shadow-md form-container backdrop-blur-sm">
                <h2 className="text-2xl font-mono font-semibold text-green-400 mb-6">&gt; SEND_MESSAGE</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-green-500 text-sm font-mono font-bold mb-2">NAME</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-green-700/30 rounded-md focus:outline-none focus:border-green-500 bg-black/40 text-green-300 font-mono"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-500 text-sm font-mono font-bold mb-2">EMAIL</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-green-700/30 rounded-md focus:outline-none focus:border-green-500 bg-black/40 text-green-300 font-mono"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-green-500 text-sm font-mono font-bold mb-2">MESSAGE</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-green-700/30 rounded-md focus:outline-none focus:border-green-500 bg-black/40 text-green-300 font-mono"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-900/40 text-green-400 px-4 py-2 rounded-md border border-green-700/30 hover:bg-green-800/50 hover:border-green-500/50 transition-all duration-300 font-mono w-full"
                    >
                        SEND_MESSAGE
                    </button>
                    {status && <p className="mt-4 text-green-400 font-mono text-sm">{status}</p>}
                </form>
                <p className="mt-5 text-gray-400 font-mono text-sm">
                    ALTERNATIVELY: <a
                        className="font-medium text-green-400 hover:text-green-300 underline"
                        href="mailto:sajjadwork101@gmail.com"
                    >
                        SAJJADWORK101@GMAIL.COM
                    </a>
                </p>
            </div>
        </div>
    );
}