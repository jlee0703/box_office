import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    weeklyBoxOfficeList: [],
  };
  getMovies = async () => {
    const {
      data: {
        boxOfficeResult: { weeklyBoxOfficeList },
      },
    } = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20200719&weekGb=0"
    );
    this.setState({ weeklyBoxOfficeList, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, weeklyBoxOfficeList } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="wrap">
            <h3 class="app_title">Box Office 2020</h3>
            <span class="source">정보제공 : 영화진흥위원회</span>
            <div class="movies">
              {weeklyBoxOfficeList.map((movie) => (
                <Movie
                  key={movie.rank}
                  rank={movie.rank}
                  movieNm={movie.movieNm}
                  openDt={movie.openDt}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App;
