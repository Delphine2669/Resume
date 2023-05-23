

function TitleFr() {
    const handleDownload = () =>{
        window.open('/pdfs/CVDT2023.pdf', '_blank');
    }
    return (
        <div id="Title">
            <h1>Delphine Thevenet</h1>
            <h3 >Développeuse Web & Web Mobile / Dev iOS Junior</h3><br/>
            <h2 className="stage placement">En recherche active de stage pour la période du 2 octobre au 15 décembre 2023</h2><br/>
            <h3><a href="/pdfs/CVDT2023.pdf" download onClick={handleDownload}>téléchargez mon CV en pdf</a></h3>
        </div>
    )
}

export default TitleFr