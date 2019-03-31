import React from "react";
import './home.css'

class Home extends React.Component {
  render() {
    return (
      
  <div>

      ​<meta name="viewport" content="width=device-width, initial-scale=1"/>
    <div id="slider">
     
<div id="captioned-gallery">
	<figure class="slider">
		<figure>
			<img src="https://i.imgur.com/jmRFgAp.jpg"/>
			<figcaption>Photo 1</figcaption>
		</figure>
		<figure>
			<img src="https://i.imgur.com/INVwPk6.jpg"/>
			<figcaption>Photo 2</figcaption>
		</figure>
		<figure>
			<img src="https://i.imgur.com/p9mZ852.jpg"/>
			<figcaption>Photo 3</figcaption>
		</figure>
		<figure>
			<img src="https://i.imgur.com/KgvoXgV.jpg"/>
			<figcaption>Photo 4</figcaption>
		</figure>
		<figure>
			<img src="https://i.imgur.com/jmRFgAp.jpg"/>
			<figcaption>Photo 1</figcaption>
		</figure>
	</figure>
</div>
</div>

   <div class="about">
	      <div class="aboutieee">
				  <div class="header">ABOUT IEEE</div>
					<div class="text">IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities.
				    <br></br>	<a href="https://www.ieee.org/about/index.html">Click Here to know more</a>
					</div>
	      </div>
		    <div class="abouttuieee">
				<div class="header">ABOUT IEEE STUDENTS' BRANCH CHAPTER | TEZPUR UNIVERSITY</div>
					<div class="text">Tezpur University IEEE Branch was established on 27th March,2014.It has conducted weekend classes for the students and has also conducted different activities such as Hosting a Talk Show with Prof. Debatosh Guha, Dr. Paul El Khoury, Dr. N.R. Das and many more.
					</div>
	      </div>
	 </div>
    
      </div>
    
    );
  }
}

export default Home;
