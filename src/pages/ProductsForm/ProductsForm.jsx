import { useState } from "react";
import './ProductsForm.css'

import validationSchema from "./formValidations.js";
import { INITIAL_PRODUCT_FORM as initialValues } from "../../utils/initialObjects.js";

//Libraries
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";

const ProductsForm = () => {
  const [previewImage, setPreviewImage] = useState(
    "https://res.cloudinary.com/dpnrbius0/image/upload/v1668109807/foodExpressRecipes/placeholder_xtwile.png"
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  ///////////////////////////////////////////////ONCHANGE IMAGE INPUT
  
  const handleInputFile = (e) => {
    const file = e.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      values.image = reader.result;
      setPreviewImage(reader.result);     
      console.log(values)
    };
  };

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/foods/create",
      data: values,
    })   
     .then(response => {
      setResponse(response.data.message)
      setLoading(false)    
      dispatch(getPlates())
     })
     .catch(error=>{
      setResponse(error?.response.data)
      setLoading(false)
     });
     formik.resetForm()
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

  return (  
      <div>

        <h2>Create New Product</h2>
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                 {loading? 
                   <div className="d-flex justify-content-center">
                   <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                   </div>
                 </div>
                   :<div>
                      <h5 className="modal-title">{response}</h5>
                    </div>    
                  }
               </div>

                 <div className="modal-footer">
                   <button 
                   type="button" 
                   className="btn btn-secondary" 
                   data-bs-dismiss="modal">Close</button>
                 </div>
               </div>
           </div>
         </div>
         <div className="back">

      <form className="w-50 my-5" onSubmit={handleSubmit}>
        {/* IMAGE */}

               <div className="input-group mb-3">
          <label className="w-100">
            <strong>Image:</strong> <br />
            <input
              className={
                errors.image ? "form-control is-invalid" : "form-control"
              }
              type="file"
              name="image"
              onChange={handleInputFile}
            />
          </label>
        </div>

        {/* NAME */}

        <fieldset>
          <div>
            <div className="form-floating mb-3">
              <input
                className={
                  errors.name && touched.name
                  ? "form-control is-invalid"
                  : "form-control"
                }
                id="floatingInput"
                placeholder="name@example.com"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
              <label htmlFor="floatingInput">Name</label>
            </div>

            {errors.name && <p>{errors.name}</p>}
          </div>

          {/* DESCRIPTION */}

          <div>
            <div className="form-floating mb-3">
              <textarea
                className={
                  errors.description && touched.description
                  ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingTextarea"
                name="description"
                rows="5"
                cols="30"
                value={values.description}
                placeholder="Write a description of the product here..."
                onChange={handleChange}
                onBlur={handleBlur}
                ></textarea>
              <label htmlFor="floatingTextarea">
                Write a description of the product here...
              </label>
            </div>

            {errors.description && touched.description && (
              <p
              // className=
              >
                {errors.description}
              </p>
            )}
          </div>

          {/* PRICE */}

          <div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                className={
                  errors.price && touched.price
                    ? "form-control is-invalid"
                    : "form-control"
                  }
                  aria-label="Amount (to the nearest dollar)"
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              <span className="input-group-text">.00</span>
            </div>

            {errors.price && (
              <p
              // className=
              >
                {errors.price}
              </p>
            )}
          </div>

          {/* TYPE */}

          <div>
            <label className="w-100">
              <select
                className="form-select"
                aria-label="Default select example"
                type="select"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select a Diet Type</option>
                <option value="Gluten Free">Gluten Free</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Protein">Protein</option>
                <option value="Others">Others</option>
              </select>
            </label>
          </div>

          {/* CATEGORY */}

          <div>
            <label className="w-100">
              <select
                className="form-select"
                aria-label="Default select example"
                type="select"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select a Category</option>
                <option value="Main Course">Main Course</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Salad">Salad</option>
                <option value="Dessert">Dessert</option>
                <option value="Beverage">Beverage</option>
              </select>
            </label>
          </div>

          {/* Rating */}

          {/* <div>
                    <label className= "w-100">
                    <strong>Rating:</strong> <br />
                    
                    <input 
                    className="form-range" 
                    min="0" 
                    max="5"
                    step="1"
                    name="rating" 
                    type="range"
                    value={values.rating} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />         
                    </label> 
                    <div>{values.rating}</div>
                    
                    {errors.rating && touched.rating && (
                      <p 
                      // className=
                      >{errors.rating}</p>
                      )}  
                    </div>    */}
        </fieldset>

        <div className="text-center mt-4">
          <button
            disabled={Object.entries(errors).length !== 0 ? true : false}
            type="submit"
            className={
              Object.entries(errors).length === 0
              ? "btn btn-danger btn-lg mx-auto"
              : "btn btn-light btn-sm"
            }
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >
            Create
          </button>
        </div>
      </form>
      <div className="previs">
        <div className="nameimgage">
          <h1>Preview</h1>
        <h2 className="titleback">Title:  {values.name}</h2>
      <img className="imag" src={values.image} height='200px'/>
        </div>
        <p>Description:   {values.description}</p>
        <h5> $ {values.price}</h5>
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{values.rating}</h5>
<div>

        <h4>Type:  {values.type}</h4>
        <h4>Category:  {values.category}</h4>
</div>
      </div>
    </div>
            </div>
  );
};

export default ProductsForm;
