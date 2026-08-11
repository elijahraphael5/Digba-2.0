import Nav from "@components/Nav";
import SiteScripts from "@components/SiteScripts";

const videos = [
  { title: "Evidence - Digba Ogunbiyi Quartet", url: "https://www.youtube.com/watch?v=aL5wx05IIKk" },
  { title: "Ikosi - Digba Ogunbiyi Quartet", url: "https://www.youtube.com/watch?v=GZ6sRiIl88s" },
  { title: "All the things you are - Digba Ogunbiyi", url: "https://www.youtube.com/watch?v=ie3lYtX_9cc" },
  { title: "Man In A Cycle - Digba Ogunbiyi", url: "https://www.youtube.com/watch?v=j1ORj9vJOwY" },
  { title: "Adedigba", url: "https://www.youtube.com/watch?v=UrGs8-6XsTI" },
  { title: "Oluronbi", url: "https://www.youtube.com/watch?v=2S4WtUpk_rM" },
  { title: "Tales Of My Love For Alla & Her Son Yannick", url: "https://www.youtube.com/watch?v=YWPGpjnrgjI" },
  { title: "Sojourner ( Animation by Obayomi Anthony)", url: "https://www.youtube.com/watch?v=IKvzRys6BMI" },
  { title: "An Interlude to what there is to come. #1", url: "https://www.youtube.com/watch?v=6sHQV6ZOtuI" },
];

export default function Video() {
  return (
    <>
      <Nav />
      <div className="pageVideo">
        <div className="videopage">
          <h1>Videos</h1>
          <ul>
            {videos.map((video) => (
              <div key={video.url}>
                <h4>{video.title}</h4>
                <li>
                  <a href={video.url}>{video.url}</a>
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <SiteScripts />
    </>
  );
}