import React from "react";
import "./footer.css";
const Footer = props => {
  return (
    <footer class="mainfooter">
      <div class="text-center">
      <div class="follow">
      <h4>FOLLOW US</h4>
      <a  href="https://www.facebook.com/ieee.tezu" rel="nofollow" title="Follow us on FaceBook"><img src="https://i.imgur.com/G5TqOyK.png" width="25" alt="FBpage"  /></a>&nbsp;
      <a  href="https://www.youtube.com/channel/UC2AOTkwhNmrRfTi7M532FJw" rel="nofollow" title="Follow us on YouTube"><img src="https://i.imgur.com/KoTtyp2.jpg" width="25" alt="YOUTUBEpage"  /></a>     
      </div>
      <div class="links">
      <h4>IMPORTANT LINKS</h4>
      
      <a href="https://www.ieee.org/" title="IEEE.org">IEEE.org</a><br></br>
      <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" title="IEEE Explore Digital Library">IEEE Explore Digital Library</a><br></br>
      <a href="https://standards.ieee.org/" title="IEEE Standard's Organisation">IEEE Standard's Organisation</a><br></br>
      <a href="https://www.ieee.org/sitemap.html" title="More Sites">More Sites</a><br></br>
      
      </div>
      <div class="para">
      <p>&copy;2019 Tezpur University, Tezpur.</p>
      </div>
      </div>
      
    </footer>
  );
 };

export default Footer;
