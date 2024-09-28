// // // import axios from "axios";
// // // import React, { useEffect, useState } from "react";

// // // function Blog() {
// // //   const [product, setProduct] = useState([]);

// // //   useEffect(() => {
// // //     async function fetchData() {
// // //       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

// // //       // Filter posts where userId is 1
// // //       const filteredPosts = response.data.filter(post => post.userId === 1);
// // //       setProduct(filteredPosts); // Set filtered posts to state
// // //       console.log(filteredPosts); // Log the filtered response data
// // //     }
// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div className="products-container">
// // //         {product.map((post) => (
// // //           <div className="product" key={post.id}>
// // //             <h4>{post.title}</h4>
// // //             <p>{post.body}</p>
// // //             <p>Posted by User ID: {post.userId}</p>
// // //           </div>
// // //         ))}

// // //        <button>previous</button> <button>1</button><button>2</button><button>3</button><button>4</button><button>5</button>.... <button>Next</button>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default Blog;

// // import axios from "axios";
// // import React, { useEffect, useState } from "react";

// // function Blog() {
// //   const [product, setProduct] = useState([]);
// //   const [currentUserId, setCurrentUserId] = useState(1); // Start with userId 1
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     // Fetch posts by current userId
// //     async function fetchData() {
// //       setLoading(true);
// //       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

// //       // Filter posts where userId matches the currentUserId
// //       const filteredPosts = response.data.filter(post => post.userId === currentUserId);
// //       setProduct(filteredPosts);
// //       setLoading(false);
// //     }
// //     fetchData();
// //   }, [currentUserId]); // Fetch data whenever currentUserId changes

// //   // Function to go to the next user's posts
// //   const nextUser = () => {
// //     setCurrentUserId(prevUserId => prevUserId + 1);
// //   };

// //   // Function to go to the previous user's posts
// //   const prevUser = () => {
// //     if (currentUserId > 1) {
// //       setCurrentUserId(prevUserId => prevUserId - 1);
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="products-container">
// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           product.map((post) => (
// //             <div className="product" key={post.id}>
// //               <h4>{post.title}</h4>
// //               <p>{post.body}</p>
// //               <p>Posted by User ID: {post.userId}</p>
// //             </div>
// //           ))
// //         )}

// //       </div>

// //       <div className="pagination">
// //           <button onClick={prevUser} disabled={currentUserId === 1}>
// //             Previous
// //           </button>
// //           <span>User ID: {currentUserId}</span>
// //           <button onClick={nextUser}>
// //             Next
// //           </button>
// //         </div>
// //     </>
// //   );
// // }

// // export default Blog;

// import React, { useEffect, useState } from "react";

// function Blog() {
//   const [blog, setBlog] = useState([]);
//   const [userId, setUserId] = useState(1);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=${userId}")
//       .then((response) => response.json())
//       .then((data) => {
//         setBlog(data);
//         setLoading(false);
//       });
//   }, [userId]);

//   const handleUserClick = (id) => {
//     setUserId(id);
//   };
//   if (loading) {
//     return (
//       <div class="loader-wrapper">
//         <div class="loader"></div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       {blog.map((p) => {
//         return (
//           <div key={p.id} className="blog">
//             <h2>{p.title}</h2>
//             <p>{p.body}</p>
//           </div>
//         );
//       })}

//       <div className="pagination-buttons">
//         <button
//           onClick={() => handleUserClick(1)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 1}
//         >
//           1
//         </button>
//         <button
//           onClick={() => handleUserClick(2)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 2}
//         >
//           2
//         </button>
//         <button
//           onClick={() => handleUserClick(3)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 3}
//         >
//           3
//         </button>
//         <button
//           onClick={() => handleUserClick(4)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 4}
//         >
//           4
//         </button>
//         <button
//           onClick={() => handleUserClick(5)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 5}
//         >
//           5
//         </button>
//         <button
//           onClick={() => handleUserClick(6)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 6}
//         >
//           6
//         </button>
//         <button
//           onClick={() => handleUserClick(7)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 7}
//         >
//           7
//         </button>
//         <button
//           onClick={() => handleUserClick(8)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 8}
//         >
//           8
//         </button>
//         <button
//           onClick={() => handleUserClick(9)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 9}
//         >
//           9
//         </button>
//         <button
//           onClick={() => handleUserClick(10)}
//           style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
//           disabled={userId === 10}
//         >
//           10
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Blog;

import React, { useEffect, useState } from "react";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [userId, setUserId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
       
        setBlog(data);
        setLoading(false);
      });
  }, [userId]);

  const handleUserClick = (id) => {
    setUserId(id);
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      {blog.map((p) => {
        return (
          <div key={p.id} className="blog">
            <h2>{p.title}</h2>
            <p>{p.body}</p>
          </div>
        );
      })}

      <div className="pagination-buttons">
        <button
          onClick={() => handleUserClick(userId - 1)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 1}
        >
          Previous
        </button>

        {/* Existing numbered pagination buttons */}
        <button
          onClick={() => handleUserClick(1)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 1}
        >
          1
        </button>
        <button
          onClick={() => handleUserClick(2)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 2}
        >
          2
        </button>
        <button
          onClick={() => handleUserClick(3)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 3}
        >
          3
        </button>
        <button
          onClick={() => handleUserClick(4)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 4}
        >
          4
        </button>
        <button
          onClick={() => handleUserClick(5)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 5}
        >
          5
        </button>
        <button
          onClick={() => handleUserClick(6)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 6}
        >
          6
        </button>
        <button
          onClick={() => handleUserClick(7)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 7}
        >
          7
        </button>
        <button
          onClick={() => handleUserClick(8)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 8}
        >
          8
        </button>
        <button
          onClick={() => handleUserClick(9)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 9}
        >
          9
        </button>
        <button
          onClick={() => handleUserClick(10)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 10}
        >
          10
        </button>

        <button
          onClick={() => handleUserClick(userId + 1)}
          style={{ margin: "5px", padding: "10px", cursor: "pointer" }}
          disabled={userId === 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blog;
