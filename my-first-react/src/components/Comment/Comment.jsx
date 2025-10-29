import { useState, useEffect } from "react";
import axios from "axios";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const { id, success } = props;

  console.log(`상위컴포넌트가 넘겨준 id : ${id}`);

  useEffect(() => {
    axios
      .get(`http://localhost/spring/api/comments/${id}`)
      .then((result) => {
        console.log("댓글 응답:", result.data);
        if (Array.isArray(result.data)) {
          setComments(result.data);
        } else if (result.data.list) {
          setComments(result.data.list);
        } else {
          setComments([]);
        }
      })
      .catch((err) => console.error("댓글 로드 실패:", err));
  }, [success, id]); // 후기 등록 성공 시 재요청

  return (
    <>
      {comments.length !== 0 ? (
        comments.map((e, i) => (
          <div
            style={{
              width: "1100px",
              margin: "auto",
              borderBottom: "1px solid lightgray",
              padding: "10px 0",
            }}
            key={i}
          >
            <h4>{e.content}</h4>
            <h5 style={{ color: "gray", fontWeight: "normal" }}>
              {e.createDate}
            </h5>
          </div>
        ))
      ) : (
        <h2 style={{ textAlign: "center", color: "#888" }}>
          아직 댓글이 존재하지 않습니다.
        </h2>
      )}
    </>
  );
};

export default Comment;
