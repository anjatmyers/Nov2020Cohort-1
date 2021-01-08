const express = require("express");
const router = express.Router();

//{data: [{}, {}, {}]}
let data = {
  data: [
    {
      id: 0,
      name: "Golden Retriever",
      img:
        "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10",
    },
    {
      id: 1,
      name: "Lab",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg",
    },
    {
      id: 2,
      name: "pug",
      img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg",
    },
    {
      id: 3,
      name: "poodle",
      img:
        "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg",
    },
  ],
};

router.get("/", (req, res) => {
  let photos = [];
  data.data.forEach((el) => {
    photos.push(el.img);
  });

  console.log(photos);

  //[img1, img2, img3]
  res.render("index", {
    data: data.data,
    photos: photos,
  });
});

module.exports = router;
