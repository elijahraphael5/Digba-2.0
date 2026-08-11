import Nav from "@components/Nav";
import SiteScripts from "@components/SiteScripts";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="contactPage">
        <div className="formSection">
          <form>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <input
              type="email"
              id="email"
              name="_replyto"
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </form>
          <button className="rgb-inner-glow">Send</button>
        </div>
      </div>
      <SiteScripts />
    </>
  );
}