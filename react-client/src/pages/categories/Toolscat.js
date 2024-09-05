import "../categories/category.scss";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";

const Toolscat = () => {
  return (
    <div className="category">
      <Share/>
      <Posts/>
    </div>
  )
};

export default Toolscat;