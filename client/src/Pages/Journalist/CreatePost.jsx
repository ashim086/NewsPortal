import React, { useState } from 'react';
import Header from "../../Components/Header";
import { ImagePlus, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate()
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
        setImageFile(null);
    };

    const resetForm = () => {
        setTitle('');
        setContent('');
        setImagePreview(null);
        setImageFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', content);
        if (imageFile) formData.append('news', imageFile);

        try {
            const response = await fetch('https://newsportal-juir.onrender.com/api/news/create', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);
                navigate("/homepage")
                resetForm();
            } else {
                toast.error(result.message || "Error creating post");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <Header />
            <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="shadow-amber-100 shadow-lg rounded-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Create New Post</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                                placeholder="Enter post title"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={6}
                                className="block w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                                placeholder="Write your post content here..."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                            <div className="w-full">
                                {imagePreview ? (
                                    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border border-gray-300">
                                        <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ) : (
                                    <label htmlFor="image-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition text-center">
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

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center items-center bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition duration-200 hover:bg-blue-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : null}
                            {isSubmitting ? 'Posting...' : 'Create Post'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
