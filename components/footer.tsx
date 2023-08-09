export default function Footer({ year }: { year: number }) {
  return (
    <>
      <footer
        id="footer"
        className="footer footer-center p-4 bg-base-100 text-base-content text-md md:text-lg"
      >
        <div>
          <p>Copyright © {year} - Paul Maier</p>
        </div>
      </footer>
    </>
  );
}
