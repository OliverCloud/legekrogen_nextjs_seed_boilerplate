

const SubscribersCard = ({ sub }) => {
  return (
    <div>
      <p>{sub._id}</p>
      <h1>{sub.name}</h1>
      <p>{sub.email}</p>
      <p>{sub.message}</p>
      <p>{sub.crated}</p>
    </div>
  );
}
export default SubscribersCard;