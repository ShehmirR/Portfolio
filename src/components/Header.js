import React from 'react'

function Header() {
    return (
        <header class="header" id="topPage">
            {/* <div class="container"> */}
            <h3><a href="#topPage">SR.</a></h3>
            <nav class="navigation">
                <ul>
                    <li><a href="#topPage">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                </ul>
            </nav>
            {/* </div> */}
        </header>
    )
}

export default Header;
