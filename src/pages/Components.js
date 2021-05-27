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
        <div className="flex-grid">
          <div className="col col-sm-12 ">
            <Button label="this one grows with the text" secondary />
          </div>
          <div className="col col-sm-12 ">
            <Button label="small" secondary sm />
          </div>
          <div className="col col-sm-12 ">
            <Button label="medium" secondary md />
          </div>
          <div className="col col-sm-12 ">
            <Button label="large" secondary lg />
          </div>
          <div className="col col-sm-12 ">
            <Button label="full" secondary full />
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentPage;

// all variants possible
// button size:sm,md,lg(optional) by default will grow as it needs
// colors: primary,secondary,warning,success,error
