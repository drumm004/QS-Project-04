import { useContext, useState } from "react";
import { AutoContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-querry";

const Share = () => {
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState ("");

    const { currentUser } = useContext(AutoContext);

    const queryClient = useQueryClient();

    const mutation = useMutation(
        (newPost) => {
            return makeRequest.post("/posts", newPost);
        
        }, 
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["posts"]);
            },
        }
    );

    const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = ("");
        if (file) imgUrl = await upload();
        mutation.mutate({desc, img, imgUrl });
        setDesc("");
        setFile(null);
    };

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <input
                            type="text"
                            placeholder={`what's your question, ${currentUser.name}?`}
                            onChange={(e) => setDesc(e.target.value[0])}
                            value={desc}
                        />
                    </div>
                    <div className="right">
                        {file && (
                            <img className="file" alt="" src={URL.createObjectURL(file)} alt="" />
                        )}
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <label htmlFor="file">
                            <div className="item">
                                <img src={map} alt=""/>
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={map} alt=""/>
                            <span>Add Place</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Share;