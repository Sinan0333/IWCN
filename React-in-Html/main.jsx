const { createRoot } = ReactDOM


function EditableTable() {
    const [tableData, setTableData] = React.useState([
      ["Onboarding Call","","","","","",""], 
      ["Google Search Console Access","","","","","",""], 
      ["Google Analytics Access","","","","","",""], 
      ["Website Access","","","","","",""], 
      ["Technical Audit","","","","","",""], 
      ["Anchor Text and Semantic Analysis","","","","","",""], 
      ["Competitor Analysis","","","","","",""], 
      ["Anchor Text/URL Mapping","","","","","",""], 
      ["Google Data Studio Report + Local Reporting Suite","","","","","",""], 
      ["Site Level Optimization","","","","","",""], 
      ["On Page Optimization","","","","","",""], 
      ["Content Creation","","","","","",""], 
      ["Content Publishing","","","","","",""], 
      ["Premium Press Release","","","","","",""], 
      ["Authority Niche Placements","","","","","",""], 
      ["Review Management","","","","","",""], 
      ["Index Links","","","","","",""], 
      ["Video Recap","","","","","",""]
    ]);
  

  const handleInputChange = (value, row, col) => {
    const newData = [...tableData];
    newData[row][col] = value;
    setTableData(newData);
  };

  const handleSubmit =async()=>{

    try {
      const options = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tableData) 
      };
  
      const response = await fetch(apiUrl, options)
  
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data:', response.statusText);
      }
    } catch (error) {
      console.error(error.message)
    }

  }

    return (
      <div className="custom-table">
        <table >
          <thead>
            <tr>
              <th colSpan="7">MONTH 1</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((value,i) => (
              <tr key={i}>
                <td style={{width:'250px' }}>
                  <input type="text" value={value[0]} onChange={e => handleInputChange(e.target.value,i,0)}/>
                </td>
                <td style={{width:'50px'}}>< input type="text" value={value[1]} onChange={e => handleInputChange(e.target.value,i,1)}/></td>
                <td style={{width:'150px'}}><input type="text" value={value[2]} onChange={e => handleInputChange(e.target.value,i,2)}/></td>
                <td style={{width:'150px'}}><input type="text" value={value[3]} onChange={e => handleInputChange(e.target.value,i,3)}/></td>
                <td style={{width:'50px'}}><input type="text" value={value[4]} onChange={e => handleInputChange(e.target.value,i,4)}/></td>
                <td style={{width:'150px'}}><input type="text" value={value[5]} onChange={e => handleInputChange(e.target.value,i,5)}/></td>
                <td style={{width:'150px'}}><input type="text" value={value[6]} onChange={e => handleInputChange(e.target.value,i,6)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('table'));
  root.render(<EditableTable />);
  
