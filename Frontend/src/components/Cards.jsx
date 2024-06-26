import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure className="flex justify-center items-center h-64 overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="truncate">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-2">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
