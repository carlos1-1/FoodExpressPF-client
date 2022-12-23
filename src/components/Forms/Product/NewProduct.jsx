import { useEffect, useState } from "react";
import './ProductsForm.css'

import validationSchema from "./formValidations.js";
import { INITIAL_PRODUCT_FORM as initialValues } from "../../../utils/initialObjects.js";

//Libraries
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { getPlates } from "../../../redux/actions";

import s from '../../DietTypes/dietTypes.module.css'

const NewProduct = () => {
  const [previewImage, setPreviewImage] = useState(
    "https://res.cloudinary.com/dpnrbius0/image/upload/v1668650818/placeholder_crmhmu.png"
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(false)
  const [dietTypes, setDietTypes] = useState([])
  const [inputType, setInputType] = useState([])
  const dispatch = useDispatch()

  const getCategories = ()=>{
    axios.get("/types")
    .then(response=>{
      setDietTypes(response.data)
      
    })
  }
  console.log('types',dietTypes)

  useEffect(()=>{
    getCategories()
  },[])

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
    values.dietTypes=inputType
    console.log(values)

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "foods/create",
      data: values,
    })   
     .then(response => {
      setResponse(response.data.message)
      setLoading(false)   
      dispatch(getPlates())
     })
     .catch(error=>{
      console.log(error)
      setResponse(error.response.data.name || error.response.data || 'Error' )
      setLoading(false)
     });

     formik.resetForm()
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

  const handleClick = () =>{
    setActiveModal(true)
  }

  const handleClickType = async e =>{
    e.preventDefault()
    const name = e.target.name
  

    if(inputType.includes(name)){
      setInputType(inputType.filter(e => e!==name))
    }else if(inputType.length<=2){
      setInputType([...inputType,name])
    }

  }
  
    // setActive(input.dietTypes)


  return (  
      <>
      
        { activeModal
         && 
         <Modal 
           setActiveModal={setActiveModal} 
           loading={loading} 
           response={response} 
          /> 
        }

      <h2>Create New Product</h2>
       
    <div className="formContainer">
      <form className="w-50 my-5" onSubmit={handleSubmit}>
        {/* IMAGE */}

               <div className="input-group mb-3">
          <label className="w-100">
            <strong>Image:</strong> <br />
            <input
              className={
                errors.image ? "form-control is-invalid w-100" : "form-control w-100"
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
            <div className="form-floating mb-3 w-100">
              <input
                className={
                  errors.name && touched.name
                  ? "form-control is-invalid w-100"
                  : "form-control w-100"
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
            <div className="form-floating mb-3 w-100">
              <textarea
                className={
                  errors.description && touched.description
                  ? "form-control is-invalid w-100"
                    : "form-control w-100"
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

          {/* TYPE

          <div>
            <label className="w-100 mb-3">
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
          </div> */}

          {/* CATEGORY */}

          <div>
            <label className="w-100 mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                type="select"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
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

           {/* DIET TYPES */}

          <fieldset>
            <input type="dietType" value={inputType} onChange={handleChange} className="form-control w-100" />
          {dietTypes &&
                dietTypes.map((e,idx)=>(
                    <button 
                        className={s.button} 
                        name={e.name} 
                        onClick={handleClickType} 
                        key={idx}>
                        {e.name}
                    </button>
                ))
            }
          </fieldset>

          {/* ONSTOCK */}

          <div>
            <label className="w-100">
              <select
                className="form-select"
                aria-label="Default select example"
                type="select"
                name="onStock"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Do we have this product in stock?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
          </div>
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
            onClick={handleClick}
            >
            Create
          </button>
        </div>
      </form>


      <div className="previs">
        <div className="nameimgage">
          <h1>Preview</h1>
          <h2 className="titleback">Title:  {values.name}</h2>
          <img className="imag" src={previewImage} height='200px'/>
        </div>

        <p>Description:   {values.description}</p>
        <h5> $ {values.price}</h5>
        <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{values.rating}</h5>
<div>

        <h4>Type:  {values.type}</h4>
        <h4>Category:  {values.category}</h4>
</div>
      </div>

      </div>
    </>
  );
};

export default NewProduct;
