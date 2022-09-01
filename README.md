# Booking App

<hr>

# Setup :
    - Clone the repo/Install as zip
    - Setup .env vars
    - type in "npm i"  in the terminal for installing dependencies
    - type in "npm start" and the website should be up and running

displayName:

startingPrice:

highlights: [String]

nextAvailable:

duration:

thumbnailSrc:

**Variant Schema**

experienceId:

displayName:

startingTime:

duration:

startingPrice:

price:

    adult:

    children:

    infants:

unavailableDates:[Date]

highlights:[String]

availableTimeSlots:[String]

ticketsLeft:

# Future additions to be made

- An admin panel to create, read, update and delete data in the database (e.g experiences, variants, cities, etc.)

- CMS integration for ease of modification of static content in the frontend

- UI improvements and additional functionalities for the users on the site

# Image dimensions

- Cities - 150 x 150
- Experiences - 200 x 200
- Variants - 200 x 200

# While deploying production

- Get images from mongoDB and not through server storage
- Admin panel
- During payment, get price from backend using a productId or so
- Bookings once, should send an alert to the employee designated and the vendors
- UI improvements
- PWA
- Searchbar and filters:
  - Place, date, experiences
- Recommendation system with ML people
- SEO
