function TitleEn() {
     const handleDownload = () =>{
        window.open('/pdfs/ResumeDT2023.pdf', '_blank');
    }
    return (
        <div id="Title">
            <h1>Delphine Thevenet</h1>
            <h3>Mobile and Web Developer / iOS Junior Dev</h3><br/>
            <h2 className="stage internship">Actively looking for an internship starting from October 2nd to December 15th 2023</h2><br/>
      <h3><a href="/pdfs/ResumeDT2023.pdf" download onClick={handleDownload}>Download my Resume in pdf</a></h3>
        </div>
    )
}

export default TitleEn