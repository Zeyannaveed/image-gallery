import React from "react";

export default function Image({
  image: { previewURL, user, views, downloads, likes },
}) {
  return (
    <div className="shadow-lg w-fit">
      <img src={previewURL} alt="" width="250px"></img>
      <div className="p-2">
        <h3 className="text-purple-500 mt-1 text-xl font-bold">
          Photo by {user}
        </h3>
        <h4>
          <span className="font-bold">Views: </span>
          {views}
        </h4>
        <h4>
          <span className="font-bold">Downlaods: </span>
          {downloads}
        </h4>
        <h4>
          <span className="font-bold">Likes: </span>
          {likes}
        </h4>
      </div>
    </div>
  );
}
