import React from 'react'

function footer() {
    return (
        <div id="footer" class="footer">
            <footer class="dark:text-gray-50">
                <div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                    <ul class="light-color self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        <li><a href="#topPage">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div class="flex flex-col justify-center pt-6 lg:pt-0">
                        <div class="flex justify-center space-x-4">
                            <a href="https://linkedin.com/in/shehmir" target="_blank" rel="noopener noreferrer" class="ftr-btn fa fa-linkedin"> </a>
                            <a href="https://github.com/ShehmirR" target="_blank" rel="noopener noreferrer" class="ftr-btn fa fa-github fa-github1"> </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer
