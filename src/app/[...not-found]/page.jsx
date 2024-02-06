import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className=" container error-404">
      <main>
        <div className="container">
          <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>Oooops</h1>
            <h2>The page you are looking for doesn't exist.</h2>
            <a class="btn" href="/">
              Back to home
            </a>
            <img
              src="/not-found.svg"
              class="img-fluid py-5"
              alt="Page Not Found"
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
