import { useEffect, useState } from "react";
import axios from "axios";

function PostDetail(props) {
  const { posts } = props;
  return (
    <>
      <h3>Id {posts?.id} </h3>
      <h3>User Id {posts?.userId}</h3>
      <h3>Title {posts?.title}</h3>
      <h3>Completed {posts?.completed}</h3>
    </>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] = useState({});
  const [pageActive, setPageActive] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    fetchPost();
  }, [pageActive]);

  useEffect(() => {
    setPagination(Array.from(Array(totalPage).keys()));
  }, [totalPage]);

  const fetchPost = async () => {
    const posts = await axios.get("http://jsonplaceholder.typicode.com/posts");
    setPosts(posts.data.slice((pageActive - 1) * 10, pageActive * 10));
    setTotalPage(Math.ceil(posts.data.length / 10));
  };

  const onClickPage = page => {
    setPageActive(page);
  };

  const onClickDetail = post => {
    setPostDetail(post);
  };

  return (
    <>
      {/* Detail */}
      <PostDetail posts={postDetail} />
      <hr></hr>

      <br />

      {/* Pagination */}
      {pagination &&
        pagination.map((v, i) => (
          <button
            onClick={() => onClickPage(v + 1)}
            key={i}
            style={v + 1 === pageActive ? { backgroundColor: "red" } : {}}>
            {v + 1}
          </button>
        ))}

      <br />
      <br />

      {/* All Data */}
      {posts.map((v, i) => (
        <div key={i}>
          <hr></hr>
          <p> {v?.id} </p>
          <p> {v?.userId} </p>
          <p> {v?.title} </p>
          <button onClick={() => onClickDetail(v)}>Show Detail</button>
        </div>
      ))}
    </>
  );
}

export default Posts;
