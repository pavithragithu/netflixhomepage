import './App.css'

function Home() {
    return(
        <>
        <div className="container-fluid box">
          
            <nav className="navbar">
 
  <a class="navbar-brand" href="#"><img style={{height:"65px",Width:"104px"}} className="img-fluid p-2 ml-10px" src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png" alt=""/></a>

    <div className="signin">
<button className="btn btn-dark "><select className="form-select bg-dark text-light" style={{Width:"220px"}}>
            <option>English</option>
            <option>Hindhi</option>
            <option>Telugu</option></select></button>
        <button className="btn btn-danger" >sign in</button>
        </div>
</nav>
<div className="text">
    <h1>The biggest Indian hits.The best Indian stories.
        All streaming here</h1>
    <h4>Watch any where.Cancel any time</h4><br/>
    <h5>Ready to Watch? Enter your Email to create or restart your membership </h5><br/>
    <div className="inputField">
    <input className="field" placeholder="email address" />
    <button  className="field2">Get started > </button>
    </div>
    
</div>

            </div>
        </>
    )
    
}

export default Home