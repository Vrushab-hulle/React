import React from "react";
import ReactDOM from "react-dom/client";

const reslist = [
  {
    id: "455748",
    name: "Diet Delight",
    cloudinaryImageId: "pbh9dealtwcbhukuxopd",
    locality: "Gandhinagar\n",
    areaName: "Shahupuri",
    costForTwo: "₹400 for two",
    cuisines: ["Indian", "Italian"],
    avgRating: 4.5,
    parentId: "276071",
    avgRatingString: "4.5",
    totalRatingsString: "116",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 1,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455749",
    name: "Spice Route",
    cloudinaryImageId: "vvfu0iicrnvbkm4euu73",
    locality: "MG Road\n",
    areaName: "Camp",
    costForTwo: "₹500 for two",
    cuisines: ["Chinese", "Thai"],
    avgRating: 4.2,
    parentId: "276072",
    avgRatingString: "4.2",
    totalRatingsString: "98",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455750",
    name: "Saffron Spoon",
    cloudinaryImageId: "wup5tdjkgoq9zlsovd6y",
    locality: "Juna Bazar\n",
    areaName: "Peth",
    costForTwo: "₹600 for two",
    cuisines: ["North Indian", "Mughlai"],
    avgRating: 4.6,
    parentId: "276073",
    avgRatingString: "4.6",
    totalRatingsString: "134",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 2.0,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455751",
    name: "Urban Tadka",
    cloudinaryImageId: "ggjo7kwxskysei6d2wge",
    locality: "Koregaon Park\n",
    areaName: "KP",
    costForTwo: "₹700 for two",
    cuisines: ["Continental", "American"],
    avgRating: 4.1,
    parentId: "276074",
    avgRatingString: "4.1",
    totalRatingsString: "142",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 3.0,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 21:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455752",
    name: "Flavours of India",
    cloudinaryImageId: "cjtaytobzeudfjcbgcl5",
    locality: "Viman Nagar\n",
    areaName: "VN",
    costForTwo: "₹450 for two",
    cuisines: ["South Indian", "Indian"],
    avgRating: 4.3,
    parentId: "276075",
    avgRatingString: "4.3",
    totalRatingsString: "167",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "32-37 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 22:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455754",
    name: "Sizzle and Grill",
    cloudinaryImageId: "mv6qxcvdpyl44brkkmkk",
    locality: "Deccan Gymkhana\n",
    areaName: "Deccan",
    costForTwo: "₹800 for two",
    cuisines: ["Steak", "Grill"],
    avgRating: 4.7,
    parentId: "276077",
    avgRatingString: "4.7",
    totalRatingsString: "210",
    sla: {
      deliveryTime: 45,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455756",
    name: "Veggie Delight",
    cloudinaryImageId: "qfwkjbnn9ce1xk30fge7",
    locality: "Aundh\n",
    areaName: "Aundh",
    costForTwo: "₹350 for two",
    cuisines: ["Vegetarian", "Healthy Food"],
    avgRating: 4.4,
    parentId: "276079",
    avgRatingString: "4.4",
    totalRatingsString: "132",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "27-32 mins",
      lastMileTravelString: "1.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 21:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "455757",
    name: "Biryani Palace",
    cloudinaryImageId: "372d8ed6c16a09ad80694a2c2b36c492",
    locality: "Hadapsar\n",
    areaName: "Hadapsar",
    costForTwo: "₹550 for two",
    cuisines: ["Biryani", "Mughlai"],
    avgRating: 4.5,
    parentId: "276080",
    avgRatingString: "4.5",
    totalRatingsString: "174",
    sla: {
      deliveryTime: 38,
      lastMileTravel: 3.5,
      serviceability: "SERVICEABLE",
      slaString: "38-43 mins",
      lastMileTravelString: "3.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-04 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cad72f16211207.562a6e3bb04cc.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
