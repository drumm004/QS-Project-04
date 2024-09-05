import "./Post.scss";
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useState, useContext } from "react";
import moment from "moment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Comments from "../comments/Comments";
import { AuthContext } from "../../context/authContext";

const Post = ({post}) => {
    const[commentOpen, setCommentOpen] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const deleteMutation = useMutation(
        (postId) => {
            return makeRequest.delete("/posts/" + postId);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );

    const handleDelete = () => {
        deleteMutation.mutate(post._id);
    };

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <div className="userInfo">
                        <div className="details">
                            <span className="name">{post.name}</span>
                            <span className="date">{moment(post.date).fromNow()}</span>
                            <LocationOnIcon/>
                            <span>{currentUser.city}, {currentUser.state}</span>
                            <LanguageIcon/>
                            <span>{currentUser.lang}</span>     
                        </div>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                </div>
            </div>
            <div className="content">
                <p>{post.desc}</p>
                <img src={"/upload" + post.img} alt="" /> 
            </div>
            <div className="info">
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <ChatIcon /> 
                    See Comments
                </div>
                <div className="item">
                    <ShareOutlinedIcon />
                    Share
                </div>
            </div>
            {commentOpen && <Comments postId={post.id} />}
         </div>
    </div>
  );
};

export default Post;