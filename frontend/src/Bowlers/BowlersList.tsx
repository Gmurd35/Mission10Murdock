import { useEffect, useState } from 'react';
import { Bowlers } from '../types/Bowlers';

function BowlersList() {
  const [BowlingData, setBowlingData] = useState<Bowlers[]>([]);

  useEffect(() => {
    const fetchBowlingData = async () => {
      const rsp = await fetch('http://localhost:5117/api/Bowling');
      const f = await rsp.json();
      setBowlingData(f);
    };
    fetchBowlingData();
  }, []);

  return (
    <>
      <div>
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name </th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {BowlingData.map((f) => (
            <tr key={f.bowlerId}>
              <td>{f.bowlerFirstName}</td>
              <td>{f.bowlerMiddleInit}</td>
              <td>{f.bowlerLastName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
              <td>{f.teamId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlersList;
