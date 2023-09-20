import "./style.css"

function  Tv(){
 return(
  <>
  <div className="container-fluid bg-dark p-2 box1">
    <div className="row box1  p-5">
        <div className="col-md-6 box2">
            <div className="box4 ml-3" style={{margine:"40px",width:"auto",TextAlign:"center"}}>
          <h1>Enjoy on your TV</h1>
         <p>Watch on smart TVs,Play stations, Xbox,
            Chromecast, Apple TV, Blue-ray players and 
            more.</p>
        </div>
        </div>
        <div className="col-md-6 box2">
                <div  className="tvfield">
                    <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="">
                        <source className="img-fluid" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" alt="" />
                        </video>
                    
                        </div>
                    
       </div>

    </div>

  </div>
  
  </>

 )
}
export default Tv