import images from './images';

const drinks = [
  {
    title: 'Spero spates',
    price: '$56',
    tags: ' Bottle',
  },
  {
    title: 'V cola',
    price: '$59',
    tags: ' Bottle',
  },
  {
    title: 'Tea',
    price: '$4',
    tags: 'cup',
  },
  {
    title: 'Coffee',
    price: '$31',
    tags: 'cup',
  },
  {
    title: 'French Coffee',
    price: '$36',
    tags: 'cup',
  },
];

const juice = [
  {
    title: 'Mango',
    price: '$20',
    tags: 'mango juice',
  },
  {
    title: "Watermelon",
    price: '$16',
    tags: 'watermelon juice',
  },
  // {
  //   title: 'Daiquiri',
  //   price: '$10',
  //   tags: 'Rum | Citrus juice | Sugar',
  // },
  // {
  //   title: 'Old Fashioned',
  //   price: '$31',
  //   tags: 'Bourbon | Brown sugar | Angostura Bitters',
  // },
  {
    title: 'Strawberry Lemonade',
    price: '$26',
    tags: 'strawberry,lemon',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { drinks, juice, awards };