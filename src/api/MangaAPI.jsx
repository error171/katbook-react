import * as request from "axios";
import qs from "qs";
import * as API from "./axios";
export function PopularManga() {
  const [manga, setManga] = useState([]);

  API
    .get(`/manga/`, {
      params: {
        limit: 30,
        includes: ["cover_art"],
        order: { followedCount: "desc" },
      },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
