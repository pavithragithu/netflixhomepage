import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './style.css'

function  Query(){
    return (
        <>
        <div className="container-fluid p-2 bg-dark">
            <div className="row query p-5">
               <h1 className="text-light">Frequently Asked Questions</h1>
        
               <div className="accordion " id="accordionExample" style={{width:"1000px"}} >
  <div className="accordion-item m-2 hover-secondary" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
       What is Netflix?
      </button> 
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body fs-5" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)",hover:"white", border:"none"}}>
     <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
     <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
      </div>
    </div>
  </div>
  <div className="accordion-item m-2" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
      How much does Netflix cost?
      </button> 
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body fs-5" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)",hover:"white", border:"none"}}>
      <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
     
      </div>
    </div>
  </div>
  {/* <br/> */}

  <div className="accordion-item m-2" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"  style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
      How do I cancel?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse fs-5" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)", border:"none"}}>
       <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item m-2" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"  style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
      Where can I Watch?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse fs-5" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)", border:"none"}}>
      <p> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
     <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
      </div>
    </div>
  </div>


<div className="accordion-item m-2" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"  style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
    What can I Watch on Netflix?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse fs-5" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)", border:"none"}}>
       <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item m-2" style={{border:"none"}}>
    <h2 className="accordion-header">
      <button className="accordion-button  fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"  style={{backgroundColor:"rgb(41, 39, 39)",color:"white",border:"none",height:"80px"}}>
      Is Netflix good for Kid?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse fs-5" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:"rgb(41, 39, 39)",color:"rgb(190, 196, 196)", border:"none"}}>
      <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
      <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
      </div>
    </div>
  </div>
 
  </div>
  

       
      <p className="fs-5 text-light m-3">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="inputField m-4">
    <input className="field" placeholder="email address" />
    <button  className="field2">Get started > </button>
    </div>
        </div>
        </div>
        </>
    )
}
export default  Query