import React from "react";


const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#"><i className="fa-brands fa-react"></i>   Jai<span>Computers   </span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">Acerca de m&iacute;</a></li>
                        <li><a href="#services" className="menu-btn">Servicios</a></li>
                        <li><a href="#skills" className="menu-btn">Habilidades</a></li>
                        <li><a href="#teams" className="menu-btn">Plataformas</a></li>
                        <li><a href="#contact" className="menu-btn">Contactos</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hola, mi nombre es</div>
                        <div className="text-2">Jairo Camilo</div>
                        <div className="text-3">y soy <span className="typing"></span></div>
                        <a href="https://www.instagram.com/jairocamilo_08/?hl=es-la"><i className="fa-brands fa-instagram"></i>   Cont&aacute;ctame</a>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">Acerca de mi</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src="https://scontent.fpop2-1.fna.fbcdn.net/v/t39.30808-6/354261004_1448780652591451_190069266719124226_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5rHM36fkwPkQ7kNvgG9m7fH&_nc_ht=scontent.fpop2-1.fna&oh=00_AYD-kHsCz-9ZCh66OpxQ6vJkdKhsVt0Nxf9cpo9obeAeKg&oe=66C5BFB1" alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">Yo soy Jairo Camilo y soy <span className="typing-2"></span></div>
                            <p>
                                Mi nombre es Jairo Camilo Acosta, y soy estudiante de la Universidad Católica Nordestana. Me especializo en el desarrollo web y móvil, además de ser diseñador de aplicaciones. Con una pasión por la tecnología y la creatividad, también me dedico a la escritura de blogs y a la creación de logotipos. Mi objetivo es combinar mis habilidades técnicas con mi interés por el diseño para ofrecer soluciones innovadoras y atractivas en el mundo digital.
                                <br />
                                Mi enfoque como profesional no solo se limita a la programación y el diseño, sino que también disfruto explorando nuevas tendencias en tecnología y creatividad. Al mantenerme actualizado con las últimas herramientas y técnicas, busco ofrecer soluciones modernas y eficientes. Mi compromiso con la excelencia y la innovación me impulsa a seguir aprendiendo y creciendo en mi campo, siempre con el objetivo de proporcionar resultados excepcionales y contribuir positivamente al mundo digital.
                            </p>
                            <a href="https://www.dropbox.com/scl/fi/ojnlbyy50om07o7avxdvc/Curr-culum-Vitae-Jairo-Camilo-Acosta.pdf?rlkey=w6rsu3rlpfmw5xxdjbo19jp6k&st=yqjo1q47&dl=1"><i className="fa-solid fa-download"></i>   Descargar CV</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">Mis servicios</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fa-solid fa-ruler"></i>
                                <div className="text">Diseñador web</div>
                                <p>Como diseñador web, me especializo en crear interfaces de usuario visualmente atractivas y funcionales, asegurándome de que cada sitio web no solo se vea bien, sino que también ofrezca una experiencia de usuario intuitiva y fluida. Trabajo estrechamente con clientes para entender sus necesidades y transformar sus ideas en diseños innovadores que capturen la esencia de su marca.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fa-solid fa-globe"></i>
                                <div className="text">Programador web</div>
                                <p>En mi rol de programador web, desarrollo aplicaciones web robustas y escalables utilizando las últimas tecnologías y estándares de la industria. Me enfoco en escribir código limpio y eficiente que permita a los sitios web y aplicaciones funcionar de manera rápida y segura, mientras optimizo el rendimiento y garantizo la compatibilidad en diferentes plataformas y dispositivos.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fa-solid fa-pen-nib"></i>
                                <div className="text">Diseñador de logos</div>
                                <p>Como creador de logos, me dedico a diseñar identidades visuales que representan la esencia y valores de una marca. Mi enfoque está en la simplicidad y la originalidad, creando logos que no solo sean estéticamente agradables, sino también memorables y versátiles, asegurando que se adapten a diferentes medios y formatos sin perder su impacto visual.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                                <div className="text">Programador m&oacute;vil</div>
                                <p>Como programador móvil, desarrollo aplicaciones intuitivas y eficientes para dispositivos iOS y Android, centrándome en crear experiencias de usuario fluidas y atractivas. Me aseguro de que cada aplicación sea rápida, segura y esté optimizada para ofrecer el mejor rendimiento en una amplia gama de dispositivos móviles, garantizando que los usuarios disfruten de una experiencia consistente y de alta calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">Mis habilidades</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">Mis habilidades y experiencias creativas</div>
                            <p><i className="fa-solid fa-circle-check"></i>  Trabajé en el proyecto JaiMovies como front-end.</p>
                            <p><i className="fa-solid fa-circle-check"></i>  Trabajé en el proyecto JaiApps for UCNE como full-stack.</p>
                            <p><i className="fa-solid fa-circle-check"></i>  Trabajé en el proyecto de logotipos con empresas.</p>
                            <p><i className="fa-solid fa-circle-check"></i>  Trabajé en el proyecto Medisoft como full-stack.</p>
                            <a href="https://github.com/acosta109-arch"><i className="fa-brands fa-github"></i>   Ver mi GitHub</a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-html5"></i>   HTML</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-css3-alt"></i>   CSS</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-bootstrap"></i>   Bootstrap</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line90"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-location-arrow"></i>   Tailwind</span>
                                    <span>80%</span>
                                </div>
                                <div className="line line80"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-n"></i>   .NET</span>
                                    <span>90%</span>
                                </div>
                                <div className="line line90"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-react"></i>   React Js</span>
                                    <span>80%</span>
                                </div>
                                <div className="line line80"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-angular"></i>   Angular Js</span>
                                    <span>80%</span>
                                </div>
                                <div className="line line80"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-a"></i>   Angular Ts</span>
                                    <span>50%</span>
                                </div>
                                <div className="line line50"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-python"></i>   Python</span>
                                    <span>85%</span>
                                </div>
                                <div className="line line85"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-android"></i>   Kotlin</span>
                                    <span>70%</span>
                                </div>
                                <div className="line line70"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-js"></i>   JavaScript</span>
                                    <span>85%</span>
                                </div>
                                <div className="line line85"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-t"></i>   TypeScript</span>
                                    <span>50%</span>
                                </div>
                                <div className="line line50"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-code"></i>   C</span>
                                    <span>90%</span>
                                </div>
                                <div className="line line90"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-terminal"></i>   C++</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-code"></i>   C#</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-database"></i>   SQL Server</span>
                                    <span>90%</span>
                                </div>
                                <div className="line line90"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-database"></i>   SQlite</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-database"></i>   MySQL</span>
                                    <span>60%</span>
                                </div>
                                <div className="line line60"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-photo-film"></i>   Adove Photoshop</span>
                                    <span>70%</span>
                                </div>
                                <div className="line line70"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-solid fa-pen-nib"></i>   Canva</span>
                                    <span>95%</span>
                                </div>
                                <div className="line line95"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-git-alt"></i>   Git</span>
                                    <span>85%</span>
                                </div>
                                <div className="line line85"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span><i className="fa-brands fa-github"></i>   GitHub</span>
                                    <span>90%</span>
                                </div>
                                <div className="line line90"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teams" id="teams">
                <div className="max-width">
                    <h2 className="title">Plataformas</h2>
                    <div className="carousel owl-carousel">
                        <div className="card">
                            <div className="box">
                                <a href="https://github.com/acosta109-arch/MediSoft" target="_blank">
                                    <img src="https://scontent.fpop2-1.fna.fbcdn.net/v/t39.30808-6/456439202_1707322056737308_5251269887342232624_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=l18q4YLsaGMQ7kNvgFJSDXP&_nc_ht=scontent.fpop2-1.fna&oh=00_AYBdkAjqL0jDd0p2uPBxHwUP3vD9aCnPixjmues0zrIb-Q&oe=66CC42B3" alt="" />
                                </a>
                                <div className="text">MediSoft</div>
                                <p>Medisoft es un sistema de gestión de citas médicas desarrollado en Blazor .NET. Este sistema está diseñado para facilitar a los pacientes la programación de sus citas médicas, al mismo tiempo que proporciona un control extremadamente organizado y eficiente para los administradores.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://jaimovies.godaddysites.com/" target="_blank">
                                    <img src="https://scontent.fpop2-1.fna.fbcdn.net/v/t39.30808-6/456308667_1707317033404477_7305215397998685078_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=phgng5Tkmq4Q7kNvgHi3yBz&_nc_ht=scontent.fpop2-1.fna&oh=00_AYA6yqKuXAOhTid_hVrRvSMx3wQZ-WI9COpKcMaBanpflg&oe=66CC580E" alt="" />
                                </a>
                                <div className="text">JaiMovies</div>
                                <p>JaiMovies es un sistema creado por Jairo para su comunidad, diseñado para que puedan ver y disfrutar de películas, series, y programas de televisión en vivo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://jaicomputers7.godaddysites.com/" target="_blank">
                                    <img src="https://scontent.fpop2-1.fna.fbcdn.net/v/t39.30808-6/456463631_1707320063404174_8289944795298292647_n.jpg?stp=dst-jpg_p75x225&_nc_cat=108&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=WXx-qcdntfEQ7kNvgFPuqJj&_nc_ht=scontent.fpop2-1.fna&oh=00_AYCj1eyU4NPL06f711h7EjFzQ327z6Zu5wJoCPYHrXJFsQ&oe=66CC41C9" alt="" />
                                </a>
                                <div className="text">JaiComputers website</div>
                                <p>El sitio web de JaiComputers es una plataforma diseñada para que los estudiantes interesados en realizar un curso con JaiComputers puedan reservar su curso y elegir su horario.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <a href="https://github.com/acosta109-arch" target="_blank">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt="" />
                                </a>
                                <div className="text">Mi GitHub</div>
                                <p>En mi GitHub, puedes encontrar muchos de mis repositorios de proyectos anteriores y universitarios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Cont&aacute;ctame</h2>
                    <div className="text-center">
                        <div className="social-media">
                            <a href="https://www.facebook.com/jairo.camiloacosta/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/jairocamilo_08/?hl=es-la" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/256/3955/3955024.png" alt="Instagram" />
                            </a>
                            <a href="https://github.com/acosta109-arch" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
                <p className="service-message">JaiComputers a tus servicios!</p>
            </section>
            <footer>
                <span>Created By <a href="https://www.instagram.com/jairocamilo_08/?hl=es-la">Jairo Camilo Acosta</a> | <span class="far fa-copyright"></span> 2024 All rights reserved.</span>
            </footer>
        </header>
    )
}

export default Header;