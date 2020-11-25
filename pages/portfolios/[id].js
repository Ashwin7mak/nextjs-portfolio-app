import { useRouter } from "next/router";

const PortfolioDetail = () => {

  const router = useRouter();
  const id = router.query.id;

  return (
    <h1>I am visiting the ID: {id}</h1>
  )
}

export default PortfolioDetail;
