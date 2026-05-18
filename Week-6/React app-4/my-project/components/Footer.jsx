export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} AppDev.
      </p>
      <div>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </footer>
  );
}
