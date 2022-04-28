import React from 'react'
import logo from  '../img/img2.jpg'
const Footer = () => {
    return (
        <footer>
            <div>
                <p> Jhon Camargo - Desarrollo Web I - 2022-1</p>

                <a href="https://www.cuc.edu.co/">
                    <img src={logo} className="unilogo" alt="Eventos"></img>
                </a>
            </div>
        </footer>
    )
}
export default Footer