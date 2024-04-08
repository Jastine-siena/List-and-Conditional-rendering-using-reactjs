import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const province = ["Mindoro", "Marinduque", "Romblon", "Palawan"];
  const newprovince = province.filter((probinsya) =>probinsya !== "Marinduque" )
  const person = [
    {
      id : 0,
      name : "One",
      age: 29
    },
    {
      id : 1,
      name : "Two",
      age: 9
    },
    {
      id : 2,
      name : "Three",
      age: 21
    },
    {
      id : 3,
      name : "Four",
      age: 25
    },
    {
      id : 4,
      name : "Five",
      age: 16
    }
  ]

  if (person.length === 0) return <h1>.......LOADING</h1>
  return (
    <>
      <ul className="list-group">
        {newprovince.map((probinsya) => {
          return <li className="list-group-item" key={probinsya}>{probinsya}</li>; // Added return statement here
        })}
      </ul>
      <hr />

      <h1 class="text-center">Table</h1>
        {person.length > 0}
        <div>
          <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">AGE</th>
            </tr>
          </thead>
          <tbody>
            {person.map((data) => {
             
             return(
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.age < 20 ? "Young" : "Old"}</td>
              </tr>
             )
            })}
          </tbody>
        </table>
          </div>
    </>
  );
}

export default App;
