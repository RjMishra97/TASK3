let input=document.getElementById("input")
let btn=document.getElementById("btn")
let data=document.getElementById("data")



btn.addEventListener("click",function(){

    let inputValue=input.value

    let apikey="f9c5d0c4"

    let URL=`http://www.omdbapi.com/?apikey=${apikey}&t=${inputValue}`
    let posterImage=`http://img.omdbapi.com/?apikey=${apikey}&` 


    fetch(URL).then((response)=>response.json()).then((res)=>{

        let movie=res;
        let posterUrl=`${posterImage}&i=${movie.imdbID}`

        const movieinfo=`
        <div>
        <img src="${posterUrl}" alt="${movie.Title}">
        <p>Release Date :-${movie.Year}</p>
        <p>IMDB Rating:-${movie.imdbRating}</p>
        <p>Cast :-${movie.Actors}</p>
        <p>Director:-${movie.Director}</p>
        </div>
        `;
        data.innerHTML=movieinfo

    })

 
})