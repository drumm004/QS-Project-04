import React from 'react'
import "./leftbar.scss";
import Tools from "../../images/1.png";
import Materials from "../../images/2.png";
import Earrings from "../../images/3.png";
import Necklaces from "../../images/4.png";
import Rings from "../../images/5.png";
import Accessories from "../../images/6.png";

const LeftBar = () =>{

  return (
    <div className="leftbar">
        <div className="container">
            <div className="item">
                <table>
                <thead>Categories</thead>
                    <tr>
                        <td className="tools">
                        <img src={Tools} alt="stylized image of jeweler's tools." />
                        <span>Tools</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="materials">
                            <img src={Materials} alt="Stylized images of gems and gold near a safe." />
                            <span>Metals & Materials</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="earrings">
                            <img src={Earrings} alt="Stylized images of earrings with pearl and heat charms." />
                            <span>Earrings & Piercings</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="necklaces">
                            <img src={Necklaces} alt="Stylized image of a butterfly-pendant necklace displayed on a bust." />
                            <span>Necklaces & Bracelets</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="rings">
                            <img src={Rings} alt="Stylized image of a diamond stone ring displayed in a box." />
                            <span>Rings</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="accessories">
                            <img src={Accessories} alt="Stylized image of a paw print charm and a heart charm on a keyring." />
                            <span>Accessories: keychains, zipper-pulls, etc.</span>
                        </td>
                    </tr>
                    <tfoot><a href="https://www.freepik.com/icon/earrings_2439487#fromView=search&page=1&position=10&uuid=6a0bf312-b2c3-45a2-bdc9-aa0922fcce65">Icons by Freepik</a></tfoot>
                </table>
            </div>
        </div>
    </div>
  )
}

export default LeftBar