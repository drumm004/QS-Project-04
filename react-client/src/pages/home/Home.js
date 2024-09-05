import "../home/Home.scss";
import "../../components/navbar/Navbar"
import "../../components/leftbar/LeftBar"
import "../../components/footer/Footer"
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="leftbar">
        <LeftBar/>
      </div>
      <div className="center">
        <h1>Hello World!</h1>
        <h2>Welcome All!</h2>
        <p>
          You have arrived at THE premier site for all things pertaining to the art and craftsmanship of jewelry design and construction for the purposes of sharing and informing all things related to this time-honored profession. This site is intended to bring together all walks of life from the DIY newbie to the seasoned professional.
        </p>
        <p>There are just a few rules and some instructions for navigating the site:</p>
        <br></br>
        <ol>
          <li> Please remain respectful at all times and be mindful of the profanity. There are crafters of all ages and cultures engaged in conversation here.</li>
          <li>Please be mindful of the language used in the conversations. All conversations are meant to be understood by all.</li>
          <li>Please select the category that best fits the question you wish to ask. Break the question down into the smallest parts and ask multiple questions if necessary.</li>
          <li>Once a category is selected, this area will open up to existing conversations revolving around the topic you have selected. Feel free to browse! Knowledge is power and here, that power is free!
          </li>
          <li>Near the top of the center section will be a small form allowing you to post a question. Your name is required to help with keeping the conversations organized. A timestamp will be applied to organize the conversations by last posted.</li>
          <li>If you know the answer to a posted question or wish to engage further into an existing conversation, look for the "comment" icon near the bottom of each posted question. If the icon is empty, no one has made any comments as of yet. If it filled, conversation around the posted question has already begin.</li>
        </ol>
        <h2>HAVE FUN!</h2>
      </div>
      <Footer/>
    </div>
  )
};

export default Home;