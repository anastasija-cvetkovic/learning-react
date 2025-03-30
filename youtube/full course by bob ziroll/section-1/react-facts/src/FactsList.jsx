
const facts = [
  { id: 1, text: "Was first created in 2013" },
  { id: 2, text: "Was originally created by Jordan Walke" },
  { id: 3, text: "Has well over 200K stars on GitHub" },
  { id: 4, text: "Is maintained by Meta" },
  { id: 5, text: "Powers thousands of enterprise apps, including mobile apps" }
];

function FactsList({facts}) {
  return (
    <ul className="facts-list">
      {facts.map(fact => (
        <li key={fact.id}>{fact.text}</li>
      ))}
    </ul>
  );
}

export default FactsList;