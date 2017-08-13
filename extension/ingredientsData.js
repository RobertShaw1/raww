// if this stays global we should take out peapod's info. All we need is the names

const ingredientsFromDBArr = [
  {
    "id": 11,
    "name": "garlic",
    "peapodName": "Christopher Ranch Garlic Peeled California Heirloom Monviso",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 47627,
    "size": "6 ",
    "createdAt": "2017-08-12T22:15:31.491Z",
    "updatedAt": "2017-08-12T22:15:31.491Z"
  },
  {
    "id": 12,
    "name": "beef sirloin",
    "peapodName": "Chef's Choice Beef Sirloin (Culotte) Steak Prime Cut Fresh",
    "price": 7,
    "unitMeasure": "LB",
    "prodId": 153151,
    "size": "APX 8 O",
    "createdAt": "2017-08-12T22:15:31.678Z",
    "updatedAt": "2017-08-12T22:15:31.678Z"
  },
  {
    "id": 13,
    "name": "onion",
    "peapodName": "Onions Vidalia",
    "price": 1,
    "unitMeasure": "EA",
    "prodId": 118628,
    "size": "1 ",
    "createdAt": "2017-08-12T22:15:31.763Z",
    "updatedAt": "2017-08-12T22:15:31.763Z"
  },
  {
    "id": 14,
    "name": "cumin ground",
    "peapodName": "Peapod Cumin Ground",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 198503,
    "size": "2 ",
    "createdAt": "2017-08-12T22:15:31.984Z",
    "updatedAt": "2017-08-12T22:15:31.984Z"
  },
  {
    "id": 15,
    "name": "black pepper",
    "peapodName": "McCormick Black Pepper Pure Ground",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 7499,
    "size": "1.5 ",
    "createdAt": "2017-08-12T22:15:32.080Z",
    "updatedAt": "2017-08-12T22:15:32.080Z"
  },
  {
    "id": 16,
    "name": "chili powder",
    "peapodName": "Peapod Chili Powder",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 193514,
    "size": "2.5 ",
    "createdAt": "2017-08-12T22:15:32.177Z",
    "updatedAt": "2017-08-12T22:15:32.177Z"
  },
  {
    "id": 17,
    "name": "paprika",
    "peapodName": "Peapod Paprika",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 193517,
    "size": "2.12 ",
    "createdAt": "2017-08-12T22:15:32.268Z",
    "updatedAt": "2017-08-12T22:15:32.268Z"
  },
  {
    "id": 18,
    "name": "thyme",
    "peapodName": "Nature's Promise Organics Thyme",
    "price": 4,
    "unitMeasure": "OZ",
    "prodId": 213339,
    "size": ".6 ",
    "createdAt": "2017-08-12T22:15:32.522Z",
    "updatedAt": "2017-08-12T22:15:32.522Z"
  },
  {
    "id": 19,
    "name": "marjoram leaves",
    "peapodName": "McCormick Marjoram Leaves",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 7456,
    "size": ".2 ",
    "createdAt": "2017-08-12T22:15:32.610Z",
    "updatedAt": "2017-08-12T22:15:32.610Z"
  },
  {
    "id": 20,
    "name": "basil dried",
    "peapodName": "Simply Organic Basil Dried",
    "price": 5,
    "unitMeasure": "OZ",
    "prodId": 171519,
    "size": ".54 ",
    "createdAt": "2017-08-12T22:15:32.694Z",
    "updatedAt": "2017-08-12T22:15:32.694Z"
  },
  {
    "id": 21,
    "name": "whiskey",
    "peapodName": "Jim Beam Bourbon Whiskey",
    "price": 33,
    "unitMeasure": "LITER",
    "prodId": 31591,
    "size": "1.75 LT",
    "createdAt": "2017-08-12T22:15:32.929Z",
    "updatedAt": "2017-08-12T22:15:32.929Z"
  },
  {
    "id": 22,
    "name": "soy sauce",
    "peapodName": "Kikkoman Soy Sauce All-Purpose",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 5501,
    "size": "10 ",
    "createdAt": "2017-08-12T22:15:33.018Z",
    "updatedAt": "2017-08-12T22:15:33.018Z"
  },
  {
    "id": 23,
    "name": "yellow mustard",
    "peapodName": "French's Classic Yellow Mustard 100% Natural",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 12469,
    "size": "14 ",
    "createdAt": "2017-08-12T22:15:33.096Z",
    "updatedAt": "2017-08-12T22:15:33.096Z"
  },
  {
    "id": 24,
    "name": "worcestershire sauce",
    "peapodName": "Peapod Worcestershire Sauce",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 205374,
    "size": "10 ",
    "createdAt": "2017-08-12T22:15:33.210Z",
    "updatedAt": "2017-08-12T22:15:33.210Z"
  },
  {
    "id": 25,
    "name": "hot sauce",
    "peapodName": "Frank's RedHot Hot Sauce Spicy Sweet & Sour",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 218955,
    "size": "6.8 ",
    "createdAt": "2017-08-12T22:15:33.297Z",
    "updatedAt": "2017-08-12T22:15:33.297Z"
  },
  {
    "id": 26,
    "name": "beer",
    "peapodName": "Miller Lite Beer - 24 pk",
    "price": 19,
    "unitMeasure": "OZ",
    "prodId": 158401,
    "size": "12 ",
    "createdAt": "2017-08-12T22:15:33.379Z",
    "updatedAt": "2017-08-12T22:15:33.379Z"
  },
  {
    "id": 27,
    "name": "beef bouillon",
    "peapodName": "Herb-Ox Bouillon Beef Cubes - 25 ct",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 67588,
    "size": "3.25 ",
    "createdAt": "2017-08-12T22:15:33.467Z",
    "updatedAt": "2017-08-12T22:15:33.467Z"
  },
  {
    "id": 28,
    "name": "pork tenderloin",
    "peapodName": "Pork Tenderloin Roast Boneless Vacuum Sealed Fresh",
    "price": 9,
    "unitMeasure": "LB",
    "prodId": 121147,
    "size": "APX 2.5 ",
    "createdAt": "2017-08-12T22:15:33.693Z",
    "updatedAt": "2017-08-12T22:15:33.693Z"
  },
  {
    "id": 29,
    "name": "root beer",
    "peapodName": "A & W Root Beer - 24 pk",
    "price": 9,
    "unitMeasure": "OZ",
    "prodId": 21894,
    "size": "12 ",
    "createdAt": "2017-08-12T22:15:33.773Z",
    "updatedAt": "2017-08-12T22:15:33.773Z"
  },
  {
    "id": 30,
    "name": "barbecue sauce",
    "peapodName": "Sweet Baby Ray's Barbecue Sauce",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 19626,
    "size": "28 ",
    "createdAt": "2017-08-12T22:15:33.862Z",
    "updatedAt": "2017-08-12T22:15:33.862Z"
  },
  {
    "id": 31,
    "name": "hamburger buns",
    "peapodName": "Centrella Hamburger Buns Enriched - 8 ct",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 122284,
    "size": "12 ",
    "createdAt": "2017-08-12T22:15:33.956Z",
    "updatedAt": "2017-08-12T22:15:33.956Z"
  },
  {
    "id": 32,
    "name": "peaches",
    "peapodName": "Peaches Saturn (Donut)",
    "price": 1,
    "unitMeasure": "EA",
    "prodId": 118654,
    "size": "1 ",
    "createdAt": "2017-08-12T22:15:34.241Z",
    "updatedAt": "2017-08-12T22:15:34.241Z"
  },
  {
    "id": 33,
    "name": "sugar",
    "peapodName": "Domino Premium Pure Cane Granulated Sugar",
    "price": 4,
    "unitMeasure": "OZ",
    "prodId": 137129,
    "size": "4 LB CA",
    "createdAt": "2017-08-12T22:15:34.338Z",
    "updatedAt": "2017-08-12T22:15:34.338Z"
  },
  {
    "id": 34,
    "name": "salt",
    "peapodName": "Morton Salt Iodized",
    "price": 1,
    "unitMeasure": "OZ",
    "prodId": 2241,
    "size": "26 ",
    "createdAt": "2017-08-12T22:15:34.419Z",
    "updatedAt": "2017-08-12T22:15:34.419Z"
  },
  {
    "id": 35,
    "name": "flour",
    "peapodName": "Peapod All-Purpose Flour Unbleached",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 205282,
    "size": "5 LB BA",
    "createdAt": "2017-08-12T22:15:34.531Z",
    "updatedAt": "2017-08-12T22:15:34.531Z"
  },
  {
    "id": 36,
    "name": "corn starch",
    "peapodName": "Argo 100% Pure Corn Starch",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 6733,
    "size": "16 ",
    "createdAt": "2017-08-12T22:15:34.646Z",
    "updatedAt": "2017-08-12T22:15:34.646Z"
  },
  {
    "id": 37,
    "name": "lemon juice",
    "peapodName": "Peapod 100% Lemon Juice from Concentrate",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 193443,
    "size": "15 ",
    "createdAt": "2017-08-12T22:15:34.765Z",
    "updatedAt": "2017-08-12T22:15:34.765Z"
  },
  {
    "id": 38,
    "name": "cayenne pepper",
    "peapodName": "Nature's Promise Organic Cayenne Pepper",
    "price": 4,
    "unitMeasure": "OZ",
    "prodId": 213325,
    "size": "1.7 ",
    "createdAt": "2017-08-12T22:15:34.883Z",
    "updatedAt": "2017-08-12T22:15:34.883Z"
  },
  {
    "id": 39,
    "name": "cinnamon ground",
    "peapodName": "Peapod Cinnamon Ground",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 193510,
    "size": "2.37 ",
    "createdAt": "2017-08-12T22:15:34.960Z",
    "updatedAt": "2017-08-12T22:15:34.960Z"
  },
  {
    "id": 40,
    "name": "pie crust",
    "peapodName": "Peapod Pie Crust Graham Cracker",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 199892,
    "size": "6 ",
    "createdAt": "2017-08-12T22:15:35.078Z",
    "updatedAt": "2017-08-12T22:15:35.078Z"
  },
  {
    "id": 41,
    "name": "butter",
    "peapodName": "LAND O LAKES Butter Salted Sticks - 4 qrtrs",
    "price": 6,
    "unitMeasure": "LB",
    "prodId": 3241,
    "size": "1 ",
    "createdAt": "2017-08-12T22:15:35.824Z",
    "updatedAt": "2017-08-12T22:15:35.824Z"
  },
  {
    "id": 42,
    "name": "heavy whipping cream",
    "peapodName": "Peapod Cream Heavy Whipping Ultra Pasteurized",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 194827,
    "size": "1/2 PIN",
    "createdAt": "2017-08-12T22:15:35.904Z",
    "updatedAt": "2017-08-12T22:15:35.904Z"
  },
  {
    "id": 43,
    "name": "eggs",
    "peapodName": "Peapod White Eggs Grade A Large",
    "price": 1,
    "unitMeasure": "DOZ",
    "prodId": 222246,
    "size": "1 ",
    "createdAt": "2017-08-12T22:15:36.003Z",
    "updatedAt": "2017-08-12T22:15:36.003Z"
  },
  {
    "id": 44,
    "name": "bread crumbs",
    "peapodName": "Peapod Bread Crumbs Italian Style",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 205357,
    "size": "24 ",
    "createdAt": "2017-08-12T22:15:36.233Z",
    "updatedAt": "2017-08-12T22:15:36.233Z"
  },
  {
    "id": 45,
    "name": "olive oil",
    "peapodName": "O-Live & Co Olive Oil Extra Virgin Limited",
    "price": 7,
    "unitMeasure": "OZ",
    "prodId": 174148,
    "size": "25 ",
    "createdAt": "2017-08-12T22:15:36.321Z",
    "updatedAt": "2017-08-12T22:15:36.321Z"
  },
  {
    "id": 46,
    "name": "chicken breast",
    "peapodName": "Peapod Chicken Breasts Boneless Skinless Value Pack Fresh",
    "price": 9,
    "unitMeasure": "LB",
    "prodId": 197479,
    "size": "APX 4-5 ",
    "createdAt": "2017-08-12T22:15:36.402Z",
    "updatedAt": "2017-08-12T22:15:36.402Z"
  },
  {
    "id": 47,
    "name": "zucchini",
    "peapodName": "Squash Zucchini",
    "price": 1,
    "unitMeasure": "EA",
    "prodId": 118633,
    "size": "1 ",
    "createdAt": "2017-08-12T22:15:36.556Z",
    "updatedAt": "2017-08-12T22:15:36.556Z"
  },
  {
    "id": 48,
    "name": "tomatoes",
    "peapodName": "Tomatoes Beefsteak",
    "price": 3,
    "unitMeasure": "EA",
    "prodId": 158051,
    "size": "4 CT PK",
    "createdAt": "2017-08-12T22:15:36.641Z",
    "updatedAt": "2017-08-12T22:15:36.641Z"
  },
  {
    "id": 49,
    "name": "mozzarella cheese",
    "peapodName": "Peapod Mozzarella Cheese Part Skim Shredded Natural",
    "price": 9,
    "unitMeasure": "LB",
    "prodId": 187556,
    "size": "32 OZ BA",
    "createdAt": "2017-08-12T22:15:36.722Z",
    "updatedAt": "2017-08-12T22:15:36.722Z"
  },
  {
    "id": 50,
    "name": "basil",
    "peapodName": "Green Giant Basil Fresh",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 201611,
    "size": ".75 ",
    "createdAt": "2017-08-12T22:15:36.815Z",
    "updatedAt": "2017-08-12T22:15:36.815Z"
  },
  {
    "id": 51,
    "name": "spinach",
    "peapodName": "Birds Eye Spinach Chopped All Natural",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 5897,
    "size": "10 ",
    "createdAt": "2017-08-12T22:15:37.067Z",
    "updatedAt": "2017-08-12T22:15:37.067Z"
  },
  {
    "id": 52,
    "name": "ricotta cheese",
    "peapodName": "Galbani Ricotta Cheese Deli Style Whole Milk",
    "price": 3,
    "unitMeasure": "LB",
    "prodId": 34557,
    "size": "15 OZ TU",
    "createdAt": "2017-08-12T22:15:40.331Z",
    "updatedAt": "2017-08-12T22:15:40.331Z"
  },
  {
    "id": 53,
    "name": "sour cream",
    "peapodName": "Daisy Sour Cream",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 62678,
    "size": "16 ",
    "createdAt": "2017-08-12T22:15:40.439Z",
    "updatedAt": "2017-08-12T22:15:40.439Z"
  },
  {
    "id": 54,
    "name": "monterey jack cheese",
    "peapodName": "Peapod Monterey Jack Cheese Finely Shredded Natural",
    "price": 3,
    "unitMeasure": "LB",
    "prodId": 208978,
    "size": "8 OZ BA",
    "createdAt": "2017-08-12T22:15:42.378Z",
    "updatedAt": "2017-08-12T22:15:42.378Z"
  },
  {
    "id": 55,
    "name": "corn tortillas",
    "peapodName": "El Milagro Corn Tortillas - 12 ct",
    "price": 1,
    "unitMeasure": "OZ",
    "prodId": 160775,
    "size": "10 ",
    "createdAt": "2017-08-12T22:15:42.610Z",
    "updatedAt": "2017-08-12T22:15:42.610Z"
  },
  {
    "id": 56,
    "name": "enchilada sauce",
    "peapodName": "Old El Paso Enchilada Sauce Red Mild",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 213979,
    "size": "19 ",
    "createdAt": "2017-08-12T22:15:42.694Z",
    "updatedAt": "2017-08-12T22:15:42.694Z"
  },
  {
    "id": 57,
    "name": "basil fresh",
    "peapodName": "Green Giant Basil Fresh",
    "price": 2,
    "unitMeasure": "OZ",
    "prodId": 201611,
    "size": ".75 ",
    "createdAt": "2017-08-12T22:15:43.625Z",
    "updatedAt": "2017-08-12T22:15:43.625Z"
  },
  {
    "id": 58,
    "name": "parsley",
    "peapodName": "Peapod Parsley Flakes",
    "price": 3,
    "unitMeasure": "OZ",
    "prodId": 205389,
    "size": ".5 ",
    "createdAt": "2017-08-12T22:15:43.703Z",
    "updatedAt": "2017-08-12T22:15:43.703Z"
  },
  {
    "id": 59,
    "name": "white pepper",
    "peapodName": "McCormick Gourmet White Pepper Ground Organic",
    "price": 7,
    "unitMeasure": "OZ",
    "prodId": 212799,
    "size": "1.75 ",
    "createdAt": "2017-08-12T22:15:43.781Z",
    "updatedAt": "2017-08-12T22:15:43.781Z"
  }
]
