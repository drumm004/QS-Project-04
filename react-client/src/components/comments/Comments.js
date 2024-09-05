import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext.js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import moment from "moment";
import "./Comments.scss";

const Comments = ({postId}) => {
    const [desc, setDesc] = useState("");
    const { currentUser } = useContext(AuthContext);

    const { isLoading, error, data } = useQuery(["comments"], () =>
        makeRequest.get("/comments?postId=" + postId).then((res) => {
            return res.data;
        })
);
    const queryClient = useQueryClient();

    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post("/comments", newComment);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId });
        setDesc("");
    };
  
    return (
        <div className="comments"> 
            <div className="write">
                <input 
                    type="text" 
                    placeholder="write a comment" 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {error
                ? "Something went wrong"
                : isLoading
                ? "loading"
                : data.map((comment) => (
                    <div className="comment">
                        <div className="info">
                            <span>{currentUser.name}</span>
                            <LocationOnIcon/>
                            <span>{currentUser.city}, {currentUser.state}</span>
                            <LanguageIcon/>
                            <span>{currentUser.lang}</span>
                        </div>
                        <div className="post">
                            <div className="info">
                                <span>{comment.title}</span>
                                <img src={comment.img} alt="" />
{/*                             <video width="320" height="240" controls >
                                    <source src={video.mp4} type="video/mp4" />
                                    <source src={video.ogg} type="video/ogg" />
                                    Sorry, your browser does not support the video tag.
                                </video>*/}
                                <p>{comment.desc}</p>
                            </div>
                            <div className="date">{moment(comment.date).fromNow()}</div>
                        </div>
                    </div>
            ))}
        </div>
    );
};

export default Comments;
