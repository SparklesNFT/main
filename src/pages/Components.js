import React from "react";
import Button from "../components/Button/Button";

const ComponentPage = () => {
  return (
    <>
      <div className="container">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>

        <p className="body2">Body2</p>
        <p className="body2 bold">Body2b</p>
        <p className="caption">Caption</p>
      </div>
      <div className="container">
        <div className="flex-grid">
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <div className="text-container">
              <h2>HEADER</h2>
              <p>
                <a>LINK</a> <b>paragraph</b> luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph
              </p>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <div className="text-container">
              <h2>HEADER</h2>
              <p>
                <a>LINK</a> <b>paragraph</b> luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph
              </p>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <div className="text-container">
              <h2>HEADER</h2>
              <p>
                <a>LINK</a> <b>paragraph</b> luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph
              </p>
            </div>
          </div>
          <div className="col col-sm-6 col-md-4 col-lg-3">
            <div className="text-container">
              <h2>HEADER</h2>
              <p>
                <a>LINK</a> <b>paragraph</b> luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph, paragraph paragraph luis alves
                paragraph, paragraph paragraph luis alves paragraph, paragraph
                paragraph luis alves paragraph
              </p>
            </div>
          </div>
        </div>
        <Button label="Browse" />
      </div>
    </>
  );
};
export default ComponentPage;
