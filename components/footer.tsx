export default function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © {getYear()} - Paul Maier</p>
      </div>
    </footer>
  );
}
