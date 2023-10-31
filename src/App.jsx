import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { useEffect } from "react";

TVShowAPI.fetchPopulars();

export function App() {
  const [currentTvShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);
  console.log("***", currentTvShow);
  return (
    <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>Detail</div>
      <div className={s.recommentations}>Recommandations</div>
    </div>
  );
}
