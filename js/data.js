// EDIT ANIMAL INFORMATION HERE
// Change animal names, photos, breeds, ages, genders, descriptions, and status in this array.
const centerInfo = {
  // CHANGE CENTER NAME HERE
  name: "Happy Paws Animal Adoption Center",
  // CHANGE ADDRESS HERE
  address: "24 Green Street, Kathmandu, Nepal",
  // CHANGE PHONE NUMBER HERE
  phone: "+977 9800000000",
  email: "hello@happypaws.example",
  hours: "Sunday - Friday, 10:00 AM - 5:00 PM",
  description: "A small community center helping rescued animals find safe, caring homes.",
  social: { facebook: "#", instagram: "#", youtube: "#" }
};

const animals = [
  { id: 1, name: "Max", type: "Dog", breed: "Labrador mix", age: "2 years", gender: "Male", size: "Medium", color: "Brown and white", image: "images/dog1.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Friendly and playful", likes: "Playing fetch and walks", goodWithChildren: "Yes", goodWithAnimals: "Yes", description: "Max is a cheerful, active dog who loves people and would enjoy a family that likes outdoor time." },
  { id: 2, name: "Luna", type: "Cat", breed: "Domestic shorthair", age: "1 year", gender: "Female", size: "Small", color: "Grey", image: "images/cat1.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Calm and curious", likes: "Window naps and gentle attention", goodWithChildren: "Yes", goodWithAnimals: "Maybe", description: "Luna is a gentle cat with a curious nose and a very soft purr." },
  { id: 3, name: "Coco", type: "Dog", breed: "Beagle mix", age: "4 years", gender: "Female", size: "Medium", color: "Tan and white", image: "images/dog2.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Loyal and sweet", likes: "Sniffing trails and cuddles", goodWithChildren: "Yes", goodWithAnimals: "Yes", description: "Coco is a loyal companion who settles nicely after a good walk." },
  { id: 4, name: "Milo", type: "Cat", breed: "Tabby", age: "3 years", gender: "Male", size: "Small", color: "Orange tabby", image: "images/cat2.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Social and funny", likes: "Toy mice and sunny spots", goodWithChildren: "Older children", goodWithAnimals: "Yes", description: "Milo makes everyone laugh and is happiest when he can be near his people." },
  { id: 5, name: "Snowy", type: "Rabbit", breed: "Lionhead mix", age: "8 months", gender: "Female", size: "Small", color: "White", image: "images/rabbit1.svg", status: "Available", vaccinated: "No", health: "Healthy", personality: "Quiet and gentle", likes: "Fresh greens and cardboard toys", goodWithChildren: "With supervision", goodWithAnimals: "No", description: "Snowy is a gentle rabbit looking for a calm indoor home." },
  { id: 6, name: "Buddy", type: "Dog", breed: "Indie mix", age: "6 years", gender: "Male", size: "Large", color: "Black and tan", image: "images/dog3.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Patient and loving", likes: "Slow walks and naps", goodWithChildren: "Yes", goodWithAnimals: "Yes", description: "Buddy is a patient older dog who has plenty of love to give." },
  { id: 7, name: "Pepper", type: "Cat", breed: "Calico mix", age: "2 years", gender: "Female", size: "Small", color: "Black, orange and white", image: "images/cat3.svg", status: "Available", vaccinated: "Yes", health: "Healthy", personality: "Independent and affectionate", likes: "Quiet rooms and treats", goodWithChildren: "Older children", goodWithAnimals: "Maybe", description: "Pepper enjoys her independence but will happily choose your lap at the end of the day." },
  { id: 8, name: "Hazel", type: "Rabbit", breed: "Mini lop", age: "1 year", gender: "Female", size: "Small", color: "Cream", image: "images/rabbit2.svg", status: "Available", vaccinated: "No", health: "Healthy", personality: "Bright and friendly", likes: "Exploring and parsley", goodWithChildren: "With supervision", goodWithAnimals: "No", description: "Hazel is a bright little rabbit who enjoys exploring safe indoor spaces." }
];

const successStories = [
  { name: "Oliver", image: "images/dog4.svg", previous: "Oliver arrived thin and nervous.", story: "After patient care and daily walks, Oliver met a family who understood him.", current: "Happy at home with two children." },
  { name: "Mimi", image: "images/cat4.svg", previous: "Mimi was found hiding near a market.", story: "A quiet foster room helped Mimi learn to trust people again.", current: "Enjoying sunny windows and a loving adopter." },
  { name: "Bunbun", image: "images/rabbit3.svg", previous: "Bunbun needed a safe indoor home.", story: "A student volunteer connected Bunbun with a rabbit-loving family.", current: "Healthy, curious, and spoiled." }
];