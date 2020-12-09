import axios from 'axios';
import Link from 'next/link';

import PorfolioCard from '@/components/portfolios/PortfolioCard';

const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
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

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  return axios.post(url, { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolios);
}

const displayData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ testData: "INITIAL PROPSSSS" });
    }, 200);
  });
}


const Portfolios = ({ portfolios }) => {

  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
        {
          portfolios.map(portfolio =>
            <div className="col-md-4" key={portfolio._id}>
              <Link
              href="/portfolios/[id]"
                as={`/portfolios/${portfolio._id}`}>
                <a className="card-link">
                  <PorfolioCard portfolio={portfolio} />
                </a>
              </Link>
            </div>
          )
        }
        </div>
      </section>
    </>
  )
}

Portfolios.getInitialProps = async () => {
  const portfolios = await fetchPortfolios();
  return { portfolios };
}

export default Portfolios;
