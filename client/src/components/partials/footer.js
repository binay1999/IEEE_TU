import React from "react";
import "./partials.css";
const Footer = props => {
  return (
    <footer>
      <div class="text-center">
      <div class="follow">
      <h4>FOLLOW US</h4>
      <a  href="https://www.facebook.com/ieee.tezu?ref=br_tf" rel="nofollow" title="Follow us on FaceBook"><img src="images/fb.png" width="25" alt="FBpage"  /></a>&nbsp;
      <a  href="https://www.youtube.com/channel/UC2AOTkwhNmrRfTi7M532FJw" rel="nofollow" title="Follow us on YouTube"><img src="images/youtube.jpg" width="25" alt="YOUTUBEpage"  /></a>     
      </div>
      <div class="links">
      <h4>IMPORTANT LINKS</h4>
      <ul>
      <li><a href="https://www.ieee.org/" title="IEEE.org">IEEE.org</a>&nbsp;&nbsp;</li>
      <li><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" title="IEEE Explore Digital Library">IEEE Explore Digital Library</a>&nbsp;&nbsp;</li>
      <li><a href="https://standards.ieee.org/" title="IEEE Standard's Organisation">IEEE Standard's Organisation</a>&nbsp;&nbsp;</li>
      <li><a href="https://spectrum.ieee.org/" title="Spectrum Online">Spectrum Online</a>&nbsp;&nbsp;</li>
      <li><a href="https://www.ieee.org/sitemap.html" title="More Sites">More Sites</a>&nbsp;&nbsp;</li>
      </ul>
      </div>
      <div class="para">
      <p>&copy;2019 Tezpur University, Tezpur.</p>
      </div>
      </div>
      
    </footer>
  );
 };

export default Footer;
