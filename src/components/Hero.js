import Html from '../assets/html-5.png';
import Css from '../assets/css-3.png';
import Javascript from '../assets/javascript.png';
import Reactjs from '../assets/react.png';
import Tailwindcss from '../assets/tailwind.png';
import Typescript from '../assets/typescript.png';
import SassLogo from '../assets/sass.png';
import gitLogo from '../assets/gitlogo.png';



export default function Hero() {
    const config = {
        subtitle: 'I am a UI Developer',
        social: {
            twitter: '',
            facebook: '',
            linkedin: ' https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'
        }
    }


    return (
     
            <section className='flex justify-evenly lg:justify-between items-center  flex-col gap-y-8 lg:flex-row p-4 lg:p-8 bg-primary  h-screen'>

                <div className=" banner-content flex flex-col text-white">
                    <h1 className='  '>Hello, </h1>
                    <h1>This is <b>Sirajul Hakkim </b> </h1>

                    <h4 className=''><i>{config.subtitle} </i>  </h4>

                
                </div>

                <div className="top-banner">
                        <div className="banner" style={{ "--quantity": 8 }}>
                            <div className="item" style={{ "--position": 1 }}>
                                <img src={Html} alt="html" />
                            </div>
                            <div className="item" style={{ "--position": 2 }}>
                                <img src={Css} alt="Css" />
                            </div>

                            <div className="item" style={{ "--position": 3 }}>
                                <img src={Reactjs} alt="React" />
                            </div>
                            <div className="item" style={{ "--position": 4 }}>
                                <img src={Javascript} alt="Javascript" />
                            </div>
                            <div className="item" style={{ "--position": 5 }}>
                                <img src={Tailwindcss} alt="Tailwindcss" />
                            </div>
                            <div className="item" style={{ "--position": 6 }}>
                                <img src={gitLogo} alt="Git" />
                            </div>
                              <div className="item" style={{ "--position": 7 }}>
                                <img src={Typescript} alt="Typescript" />
                            </div>

                            <div className="item" style={{ "--position": 8 }}>
                                <img src={SassLogo} alt="Sass" />
                            </div>
                        </div>
                        <div className="heroImage"></div>


                </div>




            </section>
 
    )

}




