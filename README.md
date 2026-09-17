# Happy Paws Animal Adoption Center

A simple, static animal adoption website made with HTML, CSS, and JavaScript. It works by opening `index.html` directly in a browser; no server, database, login, API, or payment service is required.

## EDIT THESE DETAILS

1. **Animal names, photos, breeds, ages, genders, descriptions, and adoption status:** edit the `animals` array near the top of `js/data.js` under `EDIT ANIMAL INFORMATION HERE`.
2. **Center name and contact information:** edit `centerInfo` in `js/data.js`. The comments mark the center name, phone, and address fields.
3. **Success stories:** edit the `successStories` array in `js/data.js`.
4. **Animal photos:** replace the sample SVG files in `images/`, or change an animal's `image` path in `js/data.js`. If a file is missing, the website shows `images/placeholder.svg` automatically.

## Pages

- `index.html` - home page
- `animals.html` - searchable and filterable animals
- `animal-details.html?id=1` - dynamic animal details
- `adoption.html` - adoption application
- `about.html` - center information
- `success-stories.html` - adopted animals
- `volunteer.html` - volunteer information and form
- `donate.html` - demo donation choices
- `contact.html` - contact details and form

## How to run

Double-click `index.html` or open it in a browser. The forms save demo submissions in browser `localStorage`; they do not send real data anywhere. Donation controls are also only a demo and do not process payments.

All pages use the shared files in `css/` and `js/`. Keep the relative folder structure unchanged when moving the project.
