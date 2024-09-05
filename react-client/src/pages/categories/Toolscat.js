import "../categories/category.scss";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";

const Toolscat = () => {
  return (
    <div className="category">
      <Share/>
      <Posts/>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
};

export default Toolscat;