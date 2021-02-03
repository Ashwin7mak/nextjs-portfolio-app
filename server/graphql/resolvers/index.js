
const data = {
  portfolios: [
    {
      _id: '1k12rak1',
      company: 'Apple',
      location: 'USA',
      content: 'It was a learning experience',
      jobTitle: 'Product Manager',
      experience: 5,
      startDate: '02/05/2017',
      endDate: '10/25/2017',
      isCurrentlyEmployed: false
    },
    {
      _id: '08jad912',
      company: 'Facebook',
      location: 'India',
      content: 'It was an interesting project',
      jobTitle: 'UX Designer',
      experience: 3,
      startDate: '12/05/2017',
      endDate: '08/15/2018',
      isCurrentlyEmployed: false
    },
    {
      _id: 'n1ad91j5',
      company: 'Coupang',
      location: 'Singapore',
      content: 'Short-term project',
      jobTitle: 'Software Engineer',
      experience: 7,
      startDate: '09/25/2018',
      endDate: '10/25/2020',
      isCurrentlyEmployed: true
    }
  ]
};

exports.portfolioResolvers = {
  hello: () => {
    return 'Hello world!';
  },
  portfolio: ({ id }) => {
    const portfolio = data.portfolios.find(e => e._id === id);
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  }
};
