const aboutme = document.getElementById('aboutme');

const knowAboutMe = () => {
    Swal.fire('About Project !' , 
                                `<ul>
                                    <li>Project : Weather Application</li>
                                    <li>Developer : Raspreet Singh Pasrija</li>
                                    <li>Skills : Node.js and Express.js</li>
                                    <li>Discription: This is a Dynamic Weather Application.</li>
                                </ul>
            `)
}

aboutme.addEventListener('click' , knowAboutMe);
