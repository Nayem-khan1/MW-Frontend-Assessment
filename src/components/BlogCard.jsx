import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function BlogCard({ blog }) {
    return (
        <div className="relative group w-full h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.image})` }}
            ></div>

            {/* Overlay Blur & Arrow on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <FiArrowRight className="text-white text-4xl" />
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-cyan-200 text-blue-600 text-sm px-3 py-1 rounded-full shadow">
                {blog?.categories[0]?.name}
            </div>

            {/* Read Time */}
            <p className="absolute top-3 right-3 bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow">
                {blog.read_time_minute} min read
            </p>

            {/* Bottom Info */}
            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 p-4">
                <div className="flex items-center gap-4 mb-2">
                    <img className="w-10 h-10 rounded-full object-cover" src={blog.author.image} alt={blog.author.full_name} />
                    <div>
                        <p className="text-sm font-medium text-gray-900">{blog?.author?.full_name}</p>
                        <p className="text-xs text-gray-500">{new Date(blog.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
                <h3 className="text-md font-semibold text-gray-800">{blog.title}</h3>
            </div>
        </div>
    )
}

export default BlogCard
