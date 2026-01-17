export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Is this honey pure?",
    answer: "Yes, our honey is 100% pure and natural. No adulteration or artificial additives."
  },
  {
    id: "2",
    question: "How many days for delivery?",
    answer: "24 hours delivery in Karachi and 3-5 days delivery across Pakistan."
  },
  {
    id: "3",
    question: "What are the payment methods?",
    answer: "Both Cash on Delivery and Bank Transfer payment methods are available."
  },
  {
    id: "4",
    question: "How to store honey?",
    answer: "Store at room temperature in a dry place. No need to refrigerate."
  },
  {
    id: "5",
    question: "What is the return policy?",
    answer: "You can return within 7 days if there's any issue with the product quality."
  }
];
