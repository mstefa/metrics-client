export function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        <h3>Matías Stefanutti</h3>
        <div>
          <img
            src="https://mstefanutti-site.s3.us-east-2.amazonaws.com/CV2.jpeg"
            alt="profile"
            width="99em"
            height="120em"
            border-radius="99em"
          ></img>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/matiasstefanutti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <i className="fab fa-linkedin-in"></i> */}
            Linkedin
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mstefa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <i className="fab fa-github"></i> */}
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
