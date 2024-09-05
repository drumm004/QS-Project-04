import "../categories/category.scss";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";

const Earringscat = () => {
  return (
    <div className="category">
      <Share/>
      <Posts/>
    </div>
  )
};

export default Earringscat;