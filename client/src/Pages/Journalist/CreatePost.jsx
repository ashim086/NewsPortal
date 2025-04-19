import React, { useState } from 'react';
import Header from "../../Components/Header";

import  {ImagePlus}  from 'lucide-react';

export default function CreatePost() {
    const [imagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ title, content, imagePreview });
    };

    return (
        <div className="min-h-screen ">
            <Header />
            <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className=" shadow-amber-100 shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Create New Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition"
                                placeholder="Enter post title"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={6}
                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition"
                                placeholder="Write your post content here..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Image
                            </label>
                            <div className="mt-1 flex flex-col items-center">
                                {imagePreview ? (
                                    <div className="relative w-full aspect-video mb-4">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="rounded-lg object-cover w-full h-full"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setImagePreview(null)}
                                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="image-upload"
                                        className="w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 transition"
                                    >
                                        <ImagePlus className="h-12 w-12 text-gray-400" />
                                        <span className="mt-2 text-sm text-gray-500">Click to upload an image</span>
                                    </label>
                                )}
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </div>
                        </div>

                        <div className="pt-4 ">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 cursor-pointer text-white py-3 px-6 rounded-lg transition duration-200 font-medium"
                            >
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}