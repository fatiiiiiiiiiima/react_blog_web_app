import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { BlogComp } from "../components/BlogComp";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <Appbar />
      </div>
      <div className="bg-slate-50 ">
        <BlogComp blog={blog} />
      </div>
    </>
  );
}

export default Blog;