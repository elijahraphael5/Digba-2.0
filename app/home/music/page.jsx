import Nav from "@components/Nav";
import SiteScripts from "@components/SiteScripts";

const albums = [
  {
    id: "album99",
    cover: "/home/photos/NewAlbum.png",
    title: "Digba Ogunbiyi - Stay Still",
    composer: "Composer - Timothy Adedigba Ogunbiyi",
    year: "2020",
    tracks: [
      "EXTINCT MAN",
      "OGUNJOBI (feat. Namisa Mdlalose Bizana)",
      "Zach!",
      "A peacemaker's lot",
      "Òmìrán",
      "A.O (Fading Light)",
      "A.O (After Glow)",
      "Roalol",
      "Moroko",
      "Adépèlè (feat. Temidayo Balogun)",
      "Stay Still",
    ],
    links: (
      <>
        <button>
          <a href="https://digbaogunbiyi.bandcamp.com/album/stay-still-2">
            Buy
          </a>
        </button>
        <button>
          <a target="_blank" href="https://music.apple.com/us/album/stay-still/1889702426">
            Listen
          </a>
        </button>
      </>
    ),
  },
  {
    id: "album67",
    cover: "/home/photos/500x500.jpg",
    title: "Digba - Adedigba",
    composer: "Composer - Timothy Adedigba Ogunbiyi",
    year: "2020",
    tracks: [
      "Sojourner",
      "Man in a cycle",
      "Ireti",
      "My Mother's Voice(A Voice That Won't Go)",
      "Interlude #1",
      "Wide Awake Yet He Slumbersa",
      "Tales Of My Love For Alla & Her Son Yannick",
      "Ona",
    ],
    links: [
      {
        href: "https://music.apple.com/ng/album/adedigba/1535142882",
        icon: "fa-brands fa-itunes",
      },
      {
        href: "https://open.spotify.com/artist/05wV91nOOBwjnwusumpDMz",
        icon: "fa-brands fa-spotify",
      },
      {
        href: "https://www.youtube.com/watch?v=qRyh4y6ZbP4&list=OLAK5uy_m4RmA4bfNc9fi5LZQNcpP0ag6uoxDVQzc",
        icon: "fa-brands fa-youtube",
      },
    ],
  },
  {
    id: "albumyu",
    cover: "/home/photos/album 1.jpg",
    title: "Seungyoung Hong - Lost At Sea",
    composer: "Composer - Steven Hardy, Digba Ogunbiyi",
    year: "2020",
    tracks: [
      "Interstellar",
      "Lost at Sea",
      "Seventeen",
      "The Boat Song",
      "Rhythm's Chair",
      "Longing for in then",
      "Halla",
      "Z-Related",
    ],
    links: [
      {
        href: "https://music.apple.com/ng/album/lost-at-sea-feat-steven-hardy-digba-ogunbiyi-isaac-schwartz/1705087668",
        icon: "fa-brands fa-itunes",
      },
      {
        href: "https://open.spotify.com/album/2u81q43aXuKcuSoH8aZo9B",
        icon: "fa-brands fa-spotify",
      },
      {
        href: "https://www.youtube.com/watch?v=yrFKvQ7aIz0&list=PL6hWEQMZLWVaaJqPFAsbQCvFFvCElt6ud",
        icon: "fa-brands fa-youtube",
      },
    ],
  },
  {
    id: "album77",
    cover: "/home/photos/folk.jpg",
    title: "RED 123 - Folk Song",
    composer: "Composer - Timothy Adedigba Ogunbiyi",
    year: "2020",
    tracks: ["5 on C", '"Trane" Time', "Folk Song", "August Moon", "Joni"],
    links: [
      {
        href: "https://music.apple.com/ng/album/folk-song/1602634347",
        icon: "fa-brands fa-itunes",
      },
      {
        href: "https://open.spotify.com/album/08AnAy0BIlyTnqz8qVAJig",
        icon: "fa-brands fa-spotify",
      },
      {
        href: "https://www.youtube.com/@RED123music/featured",
        icon: "fa-brands fa-youtube",
      },
    ],
  },
];

export default function Music() {
  return (
    <>
      <Nav />
      <div className="musicMenu">
        <div className="albumList">
          {albums.map((album) => (
            <div className="album" data-album={album.id} key={album.id}>
              <img src={album.cover} alt="" />
              <div className="albumDetails">
                <p>{album.title}</p>
                <span>{album.composer}</span>
                <br />
                <span>{album.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="albumPreview">
          {albums.map((album) => (
            <div id={album.id} style={{ display: "none" }} key={album.id}>
              <div className="albumCover">
                <img src={album.cover} alt="" />
              </div>
              <div className="albumTracks">
                <p>{album.title.split(" - ")[1] ?? album.title}</p>
                <ul>
                  {album.tracks.map((track) => (
                    <li key={track}>{track}</li>
                  ))}
                </ul>
                <div className="links">
                  {album.id === "album99" ? (
                    album.links
                  ) : (
                    <>
                      {album.links.map((link) => (
                        <a
                          target="_blank"
                          href={link.href}
                          key={link.href}
                        >
                          <i
                            className={link.icon}
                            style={{ color: "#fafafa", fontSize: 20 }}
                          ></i>
                        </a>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SiteScripts />
    </>
  );
}