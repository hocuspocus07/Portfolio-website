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
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className='w-screen items-center mt-10 sm:mt-4'>
            <div className="max-w-md mx-auto p-8 bg-gray-900 opacity-75 rounded-md shadow-md form-container">
                <h2 className="text-2xl font-semibold text-white mb-6">Say Something!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-lime-500 bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-lime-500 bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-lime-500 bg-gray-700 text-white"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-lime-400 text-white px-4 py-2 rounded-md hover:bg-lime-700 focus:outline-none focus:shadow-outline-blue"
                    >
                        Send Message
                    </button>
                    {status && <p className="mt-4 text-lime-400">{status}</p>}
                </form>
                <p className="mt-5 text-gray-300">
                    If you are not a fan of forms, you can email me{" "}
                    <a
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        href="mailto:sajjadwork101@gmail.com"
                    >
                        sajjadwork101@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}