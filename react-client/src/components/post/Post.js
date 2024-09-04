import "./Post.scss";
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useContext } from "react";
import moment from "moment";
import Comments from "../comments/Comments";
import { AuthContext } from "../../context/authContext";

const Post = ({post}) => {
    const[commentOpen, setCommentOpen] = useState();

    const { currentUser } = useContext(AuthContext);

  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <span>{currentUser.name}</span>
                    <LocationOnIcon/>
                    <span>{currentUser.city}, {currentUser.state}</span>
                    <LanguageIcon/>
                    <span>{currentUser.lang}</span>
                    <div className="details">
                        <span className="name">{post.title}</span>
                        <span className="date">{moment(post.date).fromNow()}</span>
                    </div>
                </div>
            </div>
            <div className="content">
                <img src={post.img} alt="" />
                <p>{post.desc}</p>
            </div>
            <div className="info">
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <ChatIcon /> 
                    12 Comments
                </div>
            </div>
            {commentOpen && <Comments/>}
         </div>
    </div>
  );
};

export default Post;