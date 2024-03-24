export default function Footer({ page }) {
  const currentYear = new Date().getFullYear();
  const currentUrl = window.location.href;
  // console.log(currentUrl);
  return (
    <footer
      className=" absolute bottom-4 left-0 w-full"
      aria-labelledby="footer-heading"
    >
      <h2
        id="footer-heading"
        className="sr-only"
      >
        Footer
      </h2>

      <div className="flex justify-between p-6 mt-4 border-t border-gray-900/10 pt-8 sm:mt-12 lg:mt-12">
        <p className="text-xs leading-5 text-gray-500">
          &copy; {currentYear} QN, {currentUrl}.
        </p>
        <p className="text-xs leading-5 text-gray-500">page {page + 1}</p>
      </div>
    </footer>
  );
}
