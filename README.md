### Overview

Travel Tour Project is a client site rendering website utilizes Google Map API. It is typed with Typescript and styled using Chakra UI component library.

For state management, Jotai is leveraged for a simple, optimized compositon that work similar to signals for complex inter-dependent states. It also provides an integration for React Query - one of the best async state manament library, which making fetching, caching, synchronizing and updating server state a breeze.

Together, these technologies provide a fast, intuitive, and scalable platform for a typical Travel Tour website.

### Key Features

1. Data filtering based on selection
   Looking for a tour is become easier just by selecting certain categories
2. Add to Cart Functionality
   Simulating add-to-cart and automatically updating total price for any changes
3. Google Map API
   Using Geolocation, Google Maps API in order to fetching tour datas and display on a Google Maps based on advanced filters
4. Serverless Function
   The project supports some of CRUD functionality, by utilize Netlify serverless function as NoSQL database solution allowing users to create, read, update hotel as a custom tour.

### Installation

Clone this repo and install all dependencies

```
git clone https://github.com/Antonio0402/travel-tour-website.git

cd travel-tour-website

npm install

//install netlify-cli
npm i -g netlify-cli

//Then login with "npm run login:netlify" command
```

### Development

```
npm run dev:netlify
```

### Build

```
npm run build
```

### Preview

```
npm run preview
```

### Screenshot

![Desktop Design](./screenshots/desktop-design.png)

### Academic Honesty

DO NOT COPY FOR AN ASSIGNMENT - Avoid plagiargism and adhere to the spirit of this Academic Honesty Policy.
