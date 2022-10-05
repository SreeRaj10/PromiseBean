
let actor = {
    fullname: "Jennifer Aniston",
    age: 55,
    email: "ja@xxxxxx.com",
    "place of birth": "California",
    availability: true,
    talent: ["acting", "singing", "dancing", "piano"],
    movies: [
      { title: "We're the Millers", year: 2013, role: "Rose O'Reilly" },
      { title: "Marley & Me", year: 2005, role: "Jennifer Grogan" },
      { title: "Love Happens", year: 2009, role: "Eloise" },
    ],
    actorIntro(){
      return `Hi my name is ${this.fullname}`;
    },
    actorMovieSummary(){
      let summary = `${this.fullname} movies \n`;
      let movie_list = "";
      actor.movies.forEach((movie) => {
        movie_list += ` ${movie.title} in ${movie.year} as ${movie.role}\n`;
        //console.log(movie_list);
      });
      return summary + movie_list;
    },
   };
    
   console.log(actor["place of birth"]);
   console.log(actor["fullname"]);
   console.log(actor["availability"]);
    
   console.log(actor.actorIntro());
   console.log(actor.actorMovieSummary());