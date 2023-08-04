import React from 'react'

function About() {
    // return (
    //     <div id="about" class="center">
    //         <h1>About</h1>
    //     </div>
    // )
    return (
        <section class="section about-section gray-bg" id="about">
            <div class="container1">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img class="" src={require('../assets/Shehmir.png')} title="" alt=""></img>
                            {/* <img class="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" title="" alt=""></img> */}
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="">
                            <h3 class="light-color aboutMe">About Me</h3>
                            <h6 class="light-color lead">Computer Science major from Plano, Texas</h6>
                            <p class="light-color">Aspiring software developer studying at the University of Texas at Dallas. 
                                Hope to change the standard of development and user experience through programming. 
                                Passionate self-taught programmer, interested in creating user-interfaces and 
                                applications with experience in Python, JavaScript, CSS, HTML and C++. My ultimate 
                                goal is to become a renowned and successful developer for an application which is 
                                used by many.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
