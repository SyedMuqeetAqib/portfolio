import React from "react";

const Product = (props) => {
  const { name } = props;
  return (
    <div>
      {/* HEADER AND IMAGE SECTION */}
      <div classname="md:flex md:justify-between md:gap-16 mt-32">
        {/* component */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.text-xxs {\n\t\tfont-size: 0.70rem;\n\t\tline-height: 0.90rem;\n\t}\n\n\t.rounded-xss {\n\t\tborder-radius: 2px !important;\n\t}\n",
          }}
        />
        {/* MDI Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
        {/* Product Card Container */}
        <div className="flex flex-col items-center justify-center mt-32">
          {/* Product Card */}
          <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
            {/* Preview */}
            <div className="inline relative group h-48">
              {/* Thumbnail */}
              <img
                className="absolute rounded-t object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=1170&q=80"
                alt="Product Preview"
              />
              {/* Hover Bar */}
              <div
                className="flex flex-row absolute justify-end
              h-16 w-full bottom-0 px-3 space-x-2
              bg-none opacity-0 group-hover:opacity-100
              group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent 
              transition-all ease-in-out duration-200 delay-100"
              >
                {/* Add to Bookmarks Button */}
                <button
                  className="bg-gray-50/10 rounded-full 
                  px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                  transition-colors duration-200"
                >
                  <i
                    className="mdi mdi-playlist-plus text-xl text-gray-200
                      hover:text-white transition-all duration-200"
                    title="Add to Bookmarks"
                  />
                </button>
                {/* Add to Favorites Button */}
                <button
                  className="bg-gray-50/10 rounded-full 
                  px-1 h-9 w-9 my-auto hover:bg-gray-50/20
                  transition-colors duration-200"
                >
                  <i
                    className="mdi mdi-heart text-xl text-gray-200 p-1
                      hover:text-white transition-all duration-200"
                    title="Add to Favorites"
                  />
                </button>
              </div>
            </div>
            {/* Body */}
            <div className="flex flex-col bg-white rounded-b p-3">
              {/* Title */}
              <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                Awesome Fantastic Super Uber Harika Merveilleux Pro Ultra Max
                Plus Plus Makeup Stuff
              </div>
              {/* Author - Category */}
              <div className="text-xxs text-gray-400 truncate mt-1">
                by
                {/* Author */}
                <a className="font-semibold hover:underline">
                  {" "}
                  EgoistDeveloper{" "}
                </a>
                in
                {/* Category */}
                <a className="font-semibold hover:underline"> e-commerce </a>
              </div>
              {/* Price */}
              <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                $23
              </div>
              {/* Body */}
              <div className="flex flex-row mt-2">
                {/* Detail Column */}
                <div className="flex flex-col flex-auto">
                  {/* Rating */}
                  <div className="flex flex-row group">
                    <i
                      className="mdi mdi-star text-xs text-amber-400 
                      hover:text-amber-500 transition-all duration-200"
                      title="Worst"
                    />
                    <i
                      className="mdi mdi-star text-xs text-amber-400 
                      hover:text-amber-500 transition-all duration-200"
                      title="Bad"
                    />
                    <i
                      className="mdi mdi-star text-xs text-amber-400 
                      hover:text-amber-500 transition-all duration-200"
                      title="Not Bad"
                    />
                    <i
                      className="mdi mdi-star text-xs text-amber-400 
                      hover:text-amber-500 transition-all duration-200"
                      title="Good"
                    />
                    <i
                      className="mdi mdi-star text-xs text-amber-400 
                      hover:text-amber-500 transition-all duration-200"
                      title="Awesome"
                    />
                    <div className="text-xxs text-gray-400 ml-1 hover:underline">
                      (45)
                    </div>
                  </div>
                  {/* Statistic */}
                  <div
                    className="text-xxs text-gray-400 mt-1"
                    title="34k Downlaods in this year"
                  >
                    34k Downloads
                  </div>
                </div>
                {/* Button Column */}
                <div className="flex flex-row flex-auto justify-end">
                  {/* Cart Button */}
                  <a
                    className="flex text-xs border px-3 my-auto py-2 mr-2
                  border-amber-500 group hover:bg-amber-500 
                  rounded-xss
                  transition-all duration-200"
                  >
                    {/* Icon */}
                    <i
                      className="mdi mdi-cart-outline text-amber-700
                      group-hover:text-white delay-100"
                    />
                  </a>
                  {/* Preview Link Button */}
                  <a
                    className="flex text-xs border px-3 my-auto py-2 
                  border-amber-500 group hover:bg-amber-500 
                  rounded-xss
                  transition-all duration-200"
                  >
                    {/* Icon */}
                    <i
                      className="mdi mdi-eye-outline text-amber-700
                      group-hover:text-white delay-100"
                    />
                    {/* Text */}
                    <div
                      className="text-xxs text-amber-700 font-semibold ml-2
                      group-hover:text-white delay-100"
                    >
                      Live Preview
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Notes */}
          <span className="text-center font-bold my-20">
            MDI (npm i @mdi/font) reuqired for icons
            <hr className="my-4" />
            <a
              href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              className="text-blue-600"
            >
              Convetert to SASS
            </a>
            <hr className="my-4" />
            <a
              href="https://unsplash.com/photos/l6HaQMpCSW0"
              target="_blank"
              className="text-blue-600"
            >
              Image Source
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
