import "./Main.scss"
import heror_logo from  "./../../assets/img/hr.png"
import google from  "./../../assets/img/google.png"
import faysbok from  "./../../assets/img/fayesbok.png"
import qush from  "./../../assets/img/qush.png"
import contac from  "./../../assets/img/contac.png"
import qulf from  "./../../assets/img/qulf.png"
function main(){
    return (
            <div className="row">
                <div className="col-6">
                    <img className="imgEl" src={heror_logo} alt="" />
                </div>
                <div className="col-6">
                    <div className="item">
                        <h3 className="h3El">Welcome Back!</h3>
                        <p>Login to continue</p>
                    </div>
                    <form className="formEl" action="">
                        <label className="label" htmlFor="">
                            <img src={contac} alt="" />
                        <input className="input" type="text" placeholder="username111@gmail.com" />
                        </label>
                        <label className="label" htmlFor="">
                            <img src={qulf} alt="" />
                            <input className="input" type="text" placeholder="Inter Password" />
                        </label>
                        <div className="box">
                             <button className="button" type="submit">Login</button>
                            <a className="pasword" type="password" href="#">FORGET PASSWORD?</a>
                        </div>
                    </form>
                    <div className="top">
                        <a className="silca" href="#">Login with</a>
                        <a href="#">
                            <img src={google} alt="" />
                        </a>
                        <a href="#">
                            <img src={faysbok} alt="" />
                        </a>
                        <a href="#">
                            <img src={qush} alt="" />
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default main;
