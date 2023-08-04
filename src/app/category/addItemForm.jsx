import { useState } from "react";
import { useForm } from "react-hook-form";

function AddItemForm({ onAddItem }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    onAddItem(data);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="plan">Plan</label>
        <input
          {...register("plan", { required: true })}
          id="plan"
          type="text"
        />
        {errors.plan && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="speed">Speed</label>
        <input
          {...register("speed", { required: true })}
          id="speed"
          type="text"
        />
        {errors.speed && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="storage">Storage</label>
        <input
          {...register("storage", { required: true })}
          id="storage"
          type="text"
        />
        {errors.storage && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input
          {...register("price", { required: true })}
          id="price"
          type="text"
        />
        {errors.price && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;
