import FactsList from "../FactsList";
export default function Main(){
  const facts = [
    { id: 1, text: "Was first created in 2013" },
    { id: 2, text: "Was originally created by Jordan Walke" },
    { id: 3, text: "Has well over 200K stars on GitHub" },
    { id: 4, text: "Is maintained by Meta" },
    { id: 5, text: "Powers thousands of enterprise apps, including mobile apps" }
  ];
  return (<>
    <main>
      <h1>Fun facts about React</h1>
      <FactsList facts={facts}/>
    </main>
  </>);
}