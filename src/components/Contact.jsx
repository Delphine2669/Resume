import mailIcon from '/mailIcon.png'
import phoneIcon from '/phoneIcon.png'
import addressIcon from '/addressIcon.png'
import linkIcon from '/linkIcon.png'

function Contact() {
    return (
        <div id="Contact">
            <span className="overline">
                <h2>Contact</h2></span>
            <table className='contactTable'>
<tbody>
                <tr>
                    <td> <img src={mailIcon} className='mailIcon icons' alt="icone enveloppe" /></td>
                    <td><a href="mailto:delphine.thevenet@live.fr" className='mailContent'>delphine.thevenet@live.fr</a></td>
                </tr>
                <tr>
                    <td> <img src={phoneIcon} className='phoneIcon icons' alt="icone telephone" /></td>
                    <td><h4 className='phoneContent '>06 72 56 97 18</h4></td>
                </tr>
                <tr>
                    <td> <img src={addressIcon} className='addressIcon icons' alt="icone pin" /></td>
                    <td><h4 className='addressContent '>Valence - Lyon</h4></td>
                </tr>
                <tr>
                    <td className='linkSection'> <img src={linkIcon} className='linkIcon icons' alt="icone lien internet" /></td>
                    <td><a href='https://github.com/Delphine2669' target="_blank" rel="noreferrer" className='linksContent '>GitHub</a></td>
                    <td><a href='https://www.linkedin.com/in/delphine-thevenet-66520a130/' target="_blank"  rel="noreferrer"className='linksContent'>Linkedin</a></td>
                </tr>

                </tbody>
            </table>
        </div >


    )
}

export default Contact