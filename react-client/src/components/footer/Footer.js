import "./Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {
  return (
    <div className="footer">
        <p>
          <a href= "http://facebook.com">
            <FacebookIcon fontSize="large" />
          </a>
          <a href= "http://linkedin.com">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href= "http://twitter.com">
            <TwitterIcon fontSize="large" />
          </a>
          <a href= "http://instagram.com">
            <InstagramIcon fontSize="large" />
          </a>
          <a href= "http://pintrest.com">
            <PinterestIcon fontSize="large" />
          </a>
        </p>
        <span>&copy;2024</span>
    </div>
  )
}

export default Footer