import "./Footer.css";

const inspirations = [
  { name: "aahanabobade.com", url: "https://aahanabobade.com" },
  { name: "aahil-khan.xyz", url: "https://aahil-khan.xyz" },
];

export default function Footer() {
  return (
    <footer className="section footer">
      <div className="footer-row">
        <span>© 2026 Praise Maduka · Lagos, Nigeria</span>
        <span>Fewer plugins, more code.</span>
      </div>
      <p className="footer-credit">
        Design inspiration from{" "}
        {inspirations.map(({ name, url }, i) => (
          <span key={name}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
            {i < inspirations.length - 2
              ? ", "
              : i === inspirations.length - 2
                ? " and "
                : "."}
          </span>
        ))}
      </p>
    </footer>
  );
}
