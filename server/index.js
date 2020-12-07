const express = require('express');
const next = require('next');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

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

app.prepare()
  .then(() => {
    const server = express();

    // Construct a schema, using GraphQL schema language
    const schema = buildSchema(`
      type Portfolio {
        _id: ID,
        company: String,
        location: String,
        content: String,
        jobTitle: String,
        experience: Int,
        startDate: String,
        endDate: String,
        isCurrentlyEmployed: Boolean
      }
      type Query {
        hello: String
        portfolio: Portfolio
        portfolios: [Portfolio]
      }
    `);

    // The root provides a resolver function for each API endpoint
    const root = {
      hello: () => {
        return 'Hello world!';
      },
      portfolio: () => {
        return data.portfolios[0];
      },
      portfolios: () => {
        return data.portfolios;
      }
    };

    server.use('/graphql', graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    }));

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if(err)
        throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });

  }).catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });
