import axios from 'axios';

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
            portfolios.map(e =>
            <div className="col-md-4" key={e._id}>
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">{e.company}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{e.jobTitle}</h6>
                  <p className="card-text fs-2">{e.content}</p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">{e.startDate} - {e.endDate}</small>
                </div>
              </div>
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
