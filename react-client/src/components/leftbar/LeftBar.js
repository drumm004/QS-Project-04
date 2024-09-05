import "./Leftbar.scss";
import Tools from "../../images/1.png";
import Materials from "../../images/2.png";
import Earrings from "../../images/3.png";
import Necklaces from "../../images/4.png";
import Rings from "../../images/5.png";
import Accessories from "../../images/6.png";
import { Link } from "react-router-dom";

const LeftBar = () =>{

    return (
        <div className="leftbar">
            <div className="container">
                <div className="item">
                    <table>
                        <thead>Categories</thead>
                            <tr>
                                <th className="tools">
                                <img src={Tools} alt="stylized image of jeweler's tools." />
                                <Link to="/Toolscat">
                                    <span>Tools</span>
                                </Link>
                                </th>
                            </tr>
                            <tr>
                                <th className="materials">
                                    <img src={Materials} alt="Stylized images of gems and gold near a safe." />
                                    <Link to="/Materialcat">
                                        <span>Metals & Materials</span>
                                    </Link>
                                </th>
                            </tr>
                            <tr>
                                <th className="earrings">
                                    <img src={Earrings} alt="Stylized images of earrings with pearl and heat charms." />
                                    <Link to="/Earringscat">
                                        <span>Earrings</span>
                                    </Link>
                                    <span>Earrings & Piercings</span>
                                
                                </th>
                            </tr>
                            <tr>
                                <th className="necklaces">
                                    <img src={Necklaces} alt="Stylized image of a butterfly-pendant necklace displayed on a bust." />
                                    <Link to="/Necklacescat">
                                        <span>Necklaces</span>
                                    </Link>
                                    <span>Necklaces & Bracelets</span>
                                
                                </th>
                            </tr>
                            <tr>
                                <th className="rings">
                                    <img src={Rings} alt="Stylized image of a diamond stone ring displayed in a box." />
                                    <Link to="/Ringscat">
                                        <span>Rings</span>
                                    </Link>
                                    <span>Rings</span>
                                
                                </th>
                            </tr>
                            <tr>
                                <th className="accessories">
                                    <img src={Accessories} alt="Stylized image of a paw print charm and a heart charm on a keyring." />
                                    <Link to="/Accessoriescat">
                                        <span>Accessories</span>
                                        <span>Accessories: keychains, zipper-pulls, etc.</span>
                                    </Link>
                                </th>
                            </tr>
                            <tfoot><a href="https://www.freepik.com/icon/earrings_2439487#fromView=search&page=1&position=10&uuid=6a0bf312-b2c3-45a2-bdc9-aa0922fcce65">Icons by Freepik</a></tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;