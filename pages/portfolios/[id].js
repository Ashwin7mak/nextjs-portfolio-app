import { useRouter } from "next/router";

import axios from 'axios';

const fetchPortfolioById = (id) => {
  const query = `
    query Portfolio($id: ID) {
      portfolio(id: $id) {
        _id
        company
        location
        content
        jobTitle
        experience
        startDate
        endDate
        isCurrentlyEmployed
      }
    }`;

  const url = 'http://localhost:3000/graphql';

  const variables = { id };

  return axios.post(url, { query, variables })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolio);
}

const PortfolioDetail = ({portfolio}) => {

  return (
    <>
    <div className="portfolio-detail">
      <div className="container">

        <div className="jumbotron">
          <h1 className="display-3">{portfolio.company}</h1>
          <p className="lead">{portfolio.jobTitle}</p>
          <p>
            <a className="btn btn-lg btn-success" href="#" role="button">
              See Company</a>
            </p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4 className="title">Location</h4>
            <p className="text">{portfolio.location}</p>

            <h4 className="title">Start Date</h4>
            <p className="text">{portfolio.startDate}</p>
          </div>

          <div className="col-lg-6">
            {/* TODO: days later... */}
            <h4 className="title">Days</h4>
            <p className="text">44</p>

            <h4 className="title">End Date</h4>
            <p className="text">{portfolio.endDate}</p>
          </div>
          <div className="col-md-12">
            <hr />
            <h4 className="title">Description</h4>
              <p>{portfolio.content}</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

PortfolioDetail.getInitialProps = async ({query}) => {
  const portfolio = await fetchPortfolioById(query.id);
  return { portfolio };
}

export default PortfolioDetail;
