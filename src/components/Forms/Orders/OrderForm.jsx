import React from 'react';

const OrderForm = ({ type, errors, touched, values, handleChange, handleBlur, handleClick, handleSubmit }) => {
  return (
    <form className="mx-auto w-50 my-5" onSubmit={handleSubmit}>

      {/* USER */}

      <fieldset>
        {/* <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.user && touched.user
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="floatingInput"
              placeholder="user@example.com"
              type="text"
              name="user"
              value={values.userId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">User</label>
          </div>

          {errors.user && <p>{errors.user}</p>}
        </div> */}

        {/* STATE */}

        <div>
          <label className="w-100 mb-3">
            <select
              className="form-select w-100"
              aria-label="Default select example"
              type="select"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
            >
              <option>Select a State for your order</option>
              <option value="inProcces">In Procces</option>
              <option value="onTravel">On Travel</option>
              <option value="done">Done</option>
            </select>
          </label>
        </div>

        {/* ADDRESS */}

        <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.address && touched.address
                  ? "form-control is-invalid w-100"
                  : "form-control w-100"
              }
              name="address"
              type="text"
              placeholder="Add an address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingTextarea">
              Add an address
            </label>
          </div>

          {errors.address && (
            <p
            // className=
            >
              {errors.address}
            </p>
          )}
        </div>








        {/* Total */}

        <div>
          <div className="form-floating mb-3">
            <input
             id="floatingTextarea"
              className={
                errors.total && touched.total
                  ? "form-control is-invalid w-100"
                  : "form-control w-100"
              }
              name="total"
              type='number'
              value={values.total}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <label htmlFor="floatingTextarea">
              Total price
            </label>
          </div>

          {errors.total && touched.total && (
            <p
            // className=
            >
              {errors.total}
            </p>
          )}
        </div>

        

        {/* COMMENTS */}

        <div>
            <div className="form-floating mb-3">
              <textarea
                className={
                  errors.coments && touched.coments
                  ? "form-control is-invalid w-100"
                    : "form-control w-100"
                }
                id="floatingTextarea"
                name="coments"
                rows="5"
                cols="30"
                value={values.coments}
                placeholder="Write some comments..."
                onChange={handleChange}
                onBlur={handleBlur}
                ></textarea>
              <label htmlFor="floatingTextarea">
                Write your comments here...
              </label>
            </div>

            {errors.coments && touched.coments && (
              <p
              // className=
              >
                {errors.coments}
              </p>
            )}
          </div>

      </fieldset>

      <div className="text-center mt-4">
        <button
          disabled={Object.entries(errors).length !== 0 ? true : false}
          type="submit"
          className={
            Object.entries(errors).length === 0
              ? "btn btn-danger btn-lg mx-auto w-100"
              : "btn btn-light btn-sm w-100"
          }
          onClick={handleClick}
        >
          {type}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;