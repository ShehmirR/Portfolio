import React from 'react'
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <div class="page-size" id="home">
            <div class="title">
                <div class="home_item">
                    <h2>Hello, my name is</h2>
                    <div class="home_name">
                        {/* <h1>Shehmir Rangwala</h1> */}

                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Shehmir Rangwala")
                                    .start()
                            }}
                        />
                    </div>
                    <div class="break">
                        <a href="https://linkedin.com/in/shehmir" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"> </a>
                        <a href="https://github.com/ShehmirR" target="_blank" rel="noopener noreferrer" class="fa fa-github fa-github1"> </a>
                    </div>
                    {/* <br></br>
                    <br></br> */}
                    <div class="break home_btns">
                        <a href={require('../assets/Shehmir_Resume.pdf')} target="_blank" rel="noopener noreferrer"><span type="button" class="btn btn--outline">Resume</span></a>
                        <a href="mailto:shehmirrangwala@gmail.com" target="_blank" rel="noopener noreferrer"><span type="button" class="btn btn--outline ml-4">Contact Me</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
