import React from 'react';

const UserForm = ({ type, errors, touched, values, handleChange, handleBlur, handleClick, handleSubmit }) => {
  return (
  <form className="mx-auto w-50 my-5" onSubmit={handleSubmit}>

  {/* NAME */}

  <fieldset>
    <div>
      <div className="form-floating mb-3">
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

    {/* EMAIL */}

    <div>
      <div className="form-floating mb-3">
        <input
          className={
            errors.email && touched.email
              ? "form-control is-invalid w-100"
              : "form-control w-100"
          }
          name="email"
          type='email'
          value={values.email}
          placeholder="Write your email..."
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <label htmlFor="floatingTextarea">
          Email...
        </label>
      </div>

      {errors.email && touched.email && (
        <p
        >
          {errors.email}
        </p>
      )}
    </div>

    {/* DIRECTION */}

    <div>
      <div className="form-floating mb-3">
        <input
          className={
            errors.direction && touched.direction
              ? "form-control is-invalid w-100"
              : "form-control w-100"
          }
          aria-label="Amount (to the nearest dollar)"
          name="direction"
          type="text"
          placeholder="Direction"
          value={values.direction}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Direction</label>
      </div>

      {errors.direction && (
        <p
        >
          {errors.direction}
        </p>
      )}
    </div>

    {/* NUMBER PHONE */}

    <div>
      <div className="form-floating mb-3">
        <input
          className={
            errors.number_phone && touched.number_phone
              ? "form-control is-invalid w-100"
              : "form-control w-100"
          }
          type="tel"
          name="number_phone"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label htmlFor="floatingInput">Number Phone</label>
      </div>
    </div>

    {/* TYPE USER */}

    <div>
      <label className="w-100">
        <select
          className="form-select w-100"
          aria-label="Default select example"
          type="select"
          name="type_user"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option>Select a User Rol</option>
          <option value="Client">Client</option>
          <option value="Admin">Admin</option>
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
      {type}
    </button>
  </div>
  </form>
      
  );
};

export default UserForm;