const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    var inputsearch = document.getElementById("search");
    var movielist = document.getElementById("movielist");

    inputsearch.addEventListener(
        "keyup", function(e){
            getmovies(e.target.value);
        }
    )


    async function getmovies(moviename =""){
        if(moviename != ""){
            var api =  `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${moviename}`;
        } else {
             api = APIURL;
         }
         const response = await fetch(api);
          
         

         if(response.status == 200){
            movielist.innerHTML = "";
            let data = await response.json();
            for(i of data.results){
                
                            const imagePath = i.poster_path === null ? "img/image-missing.png" :IMGPATH + i.poster_path;
                            
                            let item = document.createElement("div");
                            item.classList.add("box");
                            item.innerHTML = `<div class="overlay1">
                <h4 style="padding:2px; color: whitesmoke;">Rating:&nbsp;${(i.vote_average).toFixed(1)} / 10 ⭐</h>                    
            </div>
           <img src="${imagePath}" alt="" width="100%" height="100%">
           <div class="overlay">
            <h4 id="title">Name: &nbsp;${i.title}</h4>
            <b> Release Date:</b> ${i.release_date}

            <h4>Overview:</h4>
            <p style="font-size: 12px;"> ${i.overview}</p>
           </div>`;


                            // item.innerHTML = `<img src="${imagePath}" alt="" width="300px" height="300px">
                            //    <div class="overlay">
                            //     <h2 id="title">${i.title}</h2>
                            //     <h3>Overview:</h3>
                            //     <p>${i.overview}</p>
                            //    </div>`
                
                               movielist.appendChild(item);

            }
         }
    }

    // let data =  async function (getdata){
    //     let response = await fetch(APIURL);
    //     let data = await response.json();
    //     data.results.forEach((v,i) => {
    //         const imagePath = IMGPATH + v.poster_path;
    //         let item = document.createElement("div");
    //         item.classList.add("box");
    //         item.innerHTML = `<img src="${imagePath}" alt="" width="300px" height="300px">
    //            <div class="overlay">
    //             <h2 id="title">${v.title}</h2>
    //             <h3>Overview:</h3>
    //             <p>${v.overview}</p>
    //            </div>`

    //            movielist.appendChild(item);
    //     });

    //  }

   




    inputsearch.addEventListener(
        "keyup", function(e){

            if(e.target.value != ""){
                movielist.innerHTML = "";
             data(SEARCHAPI + e.target.value);

            } else {
                data(APIURL);
            }

            }
           
    
    )

    // data()
    