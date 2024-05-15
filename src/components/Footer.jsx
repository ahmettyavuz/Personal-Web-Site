const Footer = () => {
  return (
    <>
      <footer className="padding-bottom-3">
        <div className="flex js-center alg-center gap-4 padding-top-3 padding-bottom-3 ">
          <div
            className="flex column fs-800 fw-500 lh-4 padding-bottom-3"
            style={{ alignItems: "flex-end" }}
          >
            <p>Let’s work together on</p>
            <p>your next product.</p>
          </div>

          <div className="flex column fs-600 fw-500 lh-2 padding-bottom-3">
            <a href="/" className="">
              Github
            </a>
            <a href="/" className="">
              Personal Blog
            </a>
            <a href="/" className="">
              {" "}
              Linkedin
            </a>
            <a href="/" className="">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
