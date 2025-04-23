import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import ContactFrom from "./ContactFrom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('https://hr.mediusware.xyz/api/website/blogs/');
  const [selectedCategory, setSelectedCategory] = useState("All");

  const grouped = {};

  useEffect(() => {
    setLoading(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, [apiUrl]);

  // Group blogs by category name
  blogs.forEach(blog => {
    blog.categories.forEach(category => {
      const name = category.name;
      if (!grouped[name]) {
        grouped[name] = [];
      }
      grouped[name].push(blog);
    });
  });

  if (loading) return <p>Loading blogs...</p>;

  // Determine which blogs to show
  const filteredBlogs = selectedCategory === "All"
    ? blogs
    : grouped[selectedCategory] || [];

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]">Blogs</span>
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4 md:py-20 sm:py-12 py-5">
        <div>
          <button
            onClick={() => setSelectedCategory("All")}
            className={`sm:py-[11px] py-1 sm:px-6 px-4 border rounded-3xl ${selectedCategory === "All" ? "bg-[#0060AF] text-white" : "bg-white"
              }`}
          >
            All{" "}
            <span className="px-[6px] py-1 rounded-lg ms-1 text-[#008F79] bg-[#EAECF0]">
              {blogs.length}
            </span>
          </button>
        </div>
        {Object.entries(grouped).map(([categoryName, blogList]) => (
          <button
            key={categoryName}
            onClick={() => setSelectedCategory(categoryName)}
            className={`sm:py-[11px] py-1 ml-6 sm:px-6 px-4 border rounded-3xl ${selectedCategory === categoryName ? "bg-[#0060AF] text-white" : "bg-white"
              }`}
          >
            <span>{categoryName}</span>
            <span className="ml-2 bg-[#EAECF0] px-[6px] py-1 rounded-lg text-gray-600">
              {blogList.length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="py-28">
        <ContactFrom />
      </div>
    </div>
  );
};

export default AllBlogs;
