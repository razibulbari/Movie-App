async function fetchData() {
    try{
        const movieName = document.getElementById("nameMovie").value;
        const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=26e41a52`);
            
        if(!response.ok){

            throw new Error("Could Not Fetch Data")
        }

        const data = await response.json();
        console.log(data)
        const year = data.Year;
        const rating = data.Rated;
        const genre = data.Genre;
        const yearFront = document.getElementById("year");
        const ratingFront = document.getElementById("rating");
        const movieFront = document.getElementById("MovieName");
        const genreFront = document.getElementById("genre");
        const directorFront = document.getElementById("director");
        const runtimeFront = document.getElementById("runtime");
        const typeFront = document.getElementById("type");
        const imdbFront = document.getElementById("imrating")
        const writerFront = document.getElementById("writer");
        const languageFront = document.getElementById("lang");
        const plotFront = document.getElementById("summery");
        const posterFront = document.getElementById("poster")

        movieFront.innerText = movieName;
        ratingFront.innerText = data.Rated;
        yearFront.innerText = data.Year;
        genreFront.innerText = data.Genre;
        directorFront.innerText = data.Director;      
        runtimeFront.innerText = data.Runtime;
        typeFront.innerText = data.Type;
        imdbFront.innerText = data.imdbRating;
        writerFront.innerText = data.Writer;
        languageFront.innerText = data.Language;
        plotFront.innerText = data.Plot;
        posterFront.src = data.Poster;



        
    } catch(error) {
        console.error(error);
    }
}