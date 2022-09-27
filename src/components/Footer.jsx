import React from 'react';

function Footer() {
  return (
    <footer className="row text-center text-white">
      <div className="container pt-4 bg-secondary">
        <div className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-facebook-f"></i
          ></a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-twitter"></i
          ></a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-google"></i
          ></a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-instagram"></i
          ></a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-linkedin"></i
          ></a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
          ><i className="fab fa-github"></i
          ></a>
        </div>

      </div>
      <div className="text-center text-dark p-3 bg-secondary bg-opacity-25">
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  )
}

export default Footer