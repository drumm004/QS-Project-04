import "../categories/category.scss";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";

const Necklacescat = () => {
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

export default Necklacescat;