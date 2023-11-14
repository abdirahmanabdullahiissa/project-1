import React from "react";
import Tableheader from "./Tableheader";

//function to display the data from the db into a table
function Transaction({transactions}) {
    return(
    <div className="transaction-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
         
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Tableheader key={transaction.id} transaction={transaction}  />
        ))}
      </tbody>
    </table>  
   </div>     
    )
}
export default Transaction