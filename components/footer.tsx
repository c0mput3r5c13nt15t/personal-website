export default function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <>
      <footer
        id="footer"
        className="footer footer-center p-4 bg-base-100 text-base-content text-md md:text-lg"
      >
        <div>
          <p>Copyright © {getYear()} - Paul Maier</p>
        </div>
      </footer>
    </>
  );
}
