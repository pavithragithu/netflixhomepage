import './style.css'

function Footer (){
    return(
        <>
        <div className="container-fluid ">
            <div className="row  text-light links m-6" >
                <div className="row mt-6">
                    <div className="col-md-1"></div>
                    <div className="col-md-3"> <p  className="text-light m-3 ">Questions? Call 000-800-919-1694</p><br/></div>
                    <div className="col-md-8"></div>
               
                </div>
                <div className="col-md-1">
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xlg-3 ">

                    <a href="#">FAQ</a><br/>
                    <a href="#">Investor Relations</a><br/>
                    <a href="#">Privacy </a><br/>
                    <a href="#">Speed Test</a><br/>
                   <select className=" bg-dark text-light" style={{Width:"50pxpx"}}>
            <option>English</option>
            <option>Hindhi</option>
            <option>Telugu</option></select>
            <br/>
               <h6>Netflix</h6>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xlg-2">
                    <div className="pt-30px">
                <a href="#">Help Center</a><br/>
                    <a href="#">job</a><br/>
                    <a href="#">Cookies Preference</a><br/>
                    <a href="#">Legal Notices</a><br/>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xlg-2">
                <a href="#">Account </a><br/>
                    <a href="#">Way To Watch</a><br/>
                    <a href="#">Corporate Information</a><br/>
                    <a href="#">Only On Netflix</a><br/>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xlg-2">
                <a href="#">Media Center</a><br/>
                    <a href="#">Terms of Use</a><br/>
                    <a href="#">Contact Us</a><br/>
                    
                </div>
                <div className="col-md-2">
                </div>
            </div>

        </div>
        </>
    )
}
export default Footer