export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed Khan",
    location: "Karachi",
    rating: 5,
    review: "Rehmat honey quality is excellent. I have been using it for 2 years and it's completely pure and natural."
  },
  {
    id: "2",
    name: "Fatima Ali",
    location: "Lahore",
    rating: 5,
    review: "Kids love it. I always serve it at breakfast. Delivery was also very quick and packaging was perfect."
  },
  {
    id: "3",
    name: "Muhammad Imran",
    location: "Islamabad",
    rating: 5,
    review: "Sidr honey is truly amazing. Both taste and fragrance are excellent. Thanks Rehmat for quality products!"
  },
  {
    id: "4",
    name: "Ayesha Begum",
    location: "Multan",
    rating: 5,
    review: "My father has diabetes, doctor recommended pure honey. Rehmat honey is completely natural and safe."
  }
];
