import { Mountain, Heart, Camera, Users } from "lucide-react";

export const allTours = [
  {
    id: "1",
    hero: {
      title: "Explore Kashmir",
      subtitle: "Valley",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=3242&auto=format&fit=crop",
      duration: "4 Days",
      date: "December 2025",
    },
    mediaImages: [
      {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/green_homes_trees.jpg",
        alt: "Kashmir Valley - Green homes and trees",
      },
      {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/green_valley.jpg",
        alt: "Kashmir Valley - Lush green valley",
      },
      {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/green_water.jpg",
        alt: "Kashmir Valley - Pristine green water",
      },
      {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/mountains_sky.jpg",
        alt: "Kashmir Valley - Mountains",
      },
    ],
    tripOverview: [
      {
        day: 1,
        focus: "Arrival & Valley Drive",
        activities:
          "Islamabad pickup, breakfast in Muzaffarabad, scenic stops, reach Sharda, hotel check-in, relaxed evening by the river",
      },
      {
        day: 2,
        focus: "Mountains & Adventure",
        activities:
          "Drive to Kel, photo stop at Face Rock, cable car ride, hike to Arang Kel, explore village, hotel stay",
      },
      {
        day: 3,
        focus: "Nature & Calm",
        activities:
          "Easy morning in Arang Kel, explore valley, return to Kel, drive to Keran, hotel check-in, dinner",
      },
      {
        day: 4,
        focus: "Waterfall & Return",
        activities:
          "Breakfast, visit Kundal Shahi waterfall, short Muzaffarabad stop, reach Islamabad, farewell dinner, tea & walk in F-6, depart",
      },
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Arrival & Valley Drive",
        subtitle: "Islamabad to Sharda",
        items: [
          "Meet the group at Anarkali, Lahore and depart for Islamabad",
          "Short rest stop on the way",
          "Reach Islamabad and pick up remaining members (if any)",
          "Stop for Fajar Prayer on Murree Expressway",
          "Breakfast in Muzaffarabad",
          "Scenic photo stop at Neelum–Jhelum Dam",
          "Tea break at Chilhana LOC viewpoint",
          "Arrive in Sharda and check into the hotel",
          "Free evening by the Neelum River - Relax, walk, explore",
          "Dinner",
        ],
      },
      {
        day: 2,
        title: "Mountains & Adventure",
        subtitle: "Sharda to Arang Kel",
        items: [
          "Breakfast at hotel",
          "Enjoy a peaceful morning near the river",
          "Depart for Kel",
          "Short stop near the famous Face Rock viewpoint",
          "Arrive in Kel",
          "Take the Arang Kel cable car",
          "Cross the river and start the 40-minute hike to Arang Kel",
          "Hotel check-in at Arang Kel",
          "Relax and walk through the stunning alpine valley",
        ],
      },
      {
        day: 3,
        title: "Nature & Calm",
        subtitle: "Arang Kel to Keran",
        items: [
          "Late breakfast (enjoy a slow, cold morning in Arang Kel)",
          "Explore the scenic valley and take photos",
          "Lunch break",
          "Hike back down and cross via cable car to Kel",
          "Drive towards Keran",
          "Arrive and check in at hotel",
          "Dinner & overnight stay in Keran",
        ],
      },
      {
        day: 4,
        title: "Waterfall & Return",
        subtitle: "Keran to Lahore",
        items: [
          "Breakfast at hotel",
          "Visit Kundal Shahi waterfall",
          "Short break in Muzaffarabad",
          "Drive to Islamabad",
          "Farewell dinner in Islamabad",
          "Tea and a relaxing walk in F-6",
          "Departure for Lahore",
          "Arrival in Lahore around midnight",
        ],
      },
    ],
    whyThisDestination: [
      {
        icon: Mountain,
        title: "Breathtaking Nature",
        description:
          "Mountains, crystal rivers, and valleys that feel untouched by time. Experience nature in its purest form.",
      },
      {
        icon: Heart,
        title: "Warm Hospitality",
        description:
          "Peaceful landscapes and refreshing air at every stop, accompanied by the welcoming nature of the locals.",
      },
      {
        icon: Camera,
        title: "Perfect For",
        description:
          "Nature lovers, photographers, and serenity chasers looking for the perfect shot or a quiet moment.",
      },
      {
        icon: Users,
        title: "Intimate Experience",
        description:
          "A destination vast in beauty yet intimate enough to experience deeply in four days.",
      },
    ],
    description: {
      title: "Experience the Soul of Azad Kashmir",
      paragraphs: [
        "As you enter the valley, life naturally slows down. The air gets fresher, the views get wider, and everything feels calmer.",
        "Walk through peaceful villages, hear the Neelum River flowing beside you, and enjoy the quiet beauty of Sharda, Kel, and Arang Kel. Along the way, you'll meet welcoming people, see stunning landscapes, and collect simple, refreshing moments that stay with you long after the journey ends.",
      ],
      image: {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/salman_bridge.jpg",
        alt: "Kashmir Landscape",
      },
    },
    travelerMoments: [
      {
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
        alt: "Moment 1",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
        alt: "Moment 2",
      },
      {
        src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop",
        alt: "Moment 3",
      },
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
        alt: "Moment 4",
      },
      {
        src: "https://pub-63c9ffac82a6422f86399f90c8df326e.r2.dev/website_images/hillside_homes.jpg",
        alt: "Moment 5",
      },
      {
        src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
        alt: "Moment 6",
      },
    ],
    inclusions: [
      "Comfortable transportation",
      "3 nights hotel stay (Quad sharing)",
      "Breakfast & Dinner",
      "Cable car tickets for Arang Kel",
      "Entry to scheduled experiences",
      "Guided travel and support throughout the trip",
    ],
    exclusions: [
      "Lunch",
      "Any sort of personal expenses (Tea, snacks)",
      "Anything not mentioned in the included section",
    ],
    keyLocations: [
      "Muzaffarabad",
      "Neelum–Jhelum Dam",
      "Chilhana LOC viewpoint",
      "Sharda",
      "Neelum River",
      "Kel",
      "Face Rock viewpoint",
      "Arang Kel",
      "Keran",
      "Kundal Shahi waterfall",
    ],
    packingItems: [
      "Weather-appropriate clothing",
      "Shoes you can walk miles in",
      "Portable water bottle",
      "Travel plug and charging cable",
      "Foldable tote or day bag",
      "Personal care items",
    ],
    pricing: [
      {
        label: "Individual (Quad Sharing)",
        price: "PKR 20,000",
      },
      {
        label: "Couple Package",
        price: "PKR 55,000",
      },
    ],
    paymentMethods: [
      {
        type: "Bank Transfer",
        details: ["Faysal Bank", "Salman Shahzad", "3227704000006225"],
      },
      {
        type: "Easypaisa & Sadapay",
        details: ["Salman Shahzad", "03435640254"],
      },
    ],
    childPolicy: [
      {
        ageRange: "Under 3 years",
        price: "Free",
      },
      {
        ageRange: "Ages 3-10 (no bed)",
        price: "50% of price",
      },
      {
        ageRange: "Ages 3-10 (with bed)",
        price: "Full price",
      },
    ],
  },
];
