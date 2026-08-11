import Nav from "@components/Nav";
import SiteScripts from "@components/SiteScripts";

const events = [
  { date: "August 13", title: "Temidayo and Akéde", venue: "Mad Monkfish, Cambridge MA" },
  { date: "August 20", title: "Digba Ogunbiyi Quartet", venue: "Fitler Club, Philadelphia" },
  { date: "August 27", title: "Digba Ogunbiyi Quartet", venue: "Triumph, Red Bank NJ" },
  { date: "September 23", title: "Rob Boyd Quintet", venue: "Cellar Dog, Philadelphia" },
  { date: "September 25", title: "Digba Ogunbiyi Quartet", venue: "Triumph, Princeton, NJ" },
  { date: "September 26", title: "Oliver Mayman Quartet", venue: "Palombaro Club, Ardmore, PA" },
  { date: "October 3", title: "Digba Ogunbiyi Quartet", venue: "Long Branch Culture Festival, Long Branch, NJ" },
  { date: "October 15", title: "Digba Ogunbiyi Quartet", venue: "Triumph, Red Bank NJ" },
  { date: "October 21", title: "Digba Ogunbiyi Trio", venue: "Cellar Dog, Philadelphia" },
  { date: "November 7", title: "Digba Ogunbiyi Quartet", venue: "Washington Heights Jazz Festival, NY" },
  { date: "November 20", title: "Digba Ogunbiyi Quartet", venue: "Triumph, Princeton, NJ" },
  { date: "December 10", title: "Digba Ogunbiyi Quartet", venue: "Triumph, Red Bank NJ" },
];

export default function Events() {
  return (
    <>
      <Nav />
      <div className="events">
        <div className="eventSection">
          <div className="eventgrid">
            <div className="pageGrid">
              {events.map((event) => (
                <div className="eventdetails" key={event.date + event.title}>
                  <h1>{event.date}</h1>
                  <h4>
                    <span>{event.title}</span>
                  </h4>
                  <h5>{event.venue}</h5>
                </div>
              ))}
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <SiteScripts />
    </>
  );
}