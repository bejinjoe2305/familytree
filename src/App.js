import FamilyTree from './components/FamilyTree.jsx';
import Tree from 'react-d3-tree'
import ToolTip from './ToolTip';
import { useState } from 'react';

const familyData = [
  { 
    name: 'Mayakondan',
    spouse: 'Unknown',
    description: 'This is about something that i wanna type just not getting content ',
    children: [
      {
        name: 'Daveedu',
        spouse: 'Unkown',
        children: [
          {
            name: 'Nathaniel',
            spouse: 'Nathcathiram',
            children:[{
              name : 'Leah'
            },{
              name  : 'Esther'
            },
            {
              name  : 'Solomon',
              spouse :'Kannimarial',
              children :[{
                name : 'Kurusumuthu',
                spouse : 'Syria Pushpam',
                children : [{
                  name:'Mary Jancintha Seraphim'
                },{
                  name:'Louise Joseph Raju'
                }]
              },{
                name : 'Mariadas',
                spouse:'Maria Rethinam',
                children:[{
                  name:'Lourdes Mary'
                },{
                  name:'John Joseph'
                },{
                  name:'Michael Das'
                },{
                  name:'Xavier Jose'
                },{
                  name:'Antony Joseph'
                }]
              },{
                name : 'Arulappan'
              },{
                name : 'Claramma'
              },{
                name : 'Gabriel'
              }]
            },
            {
              name  : 'Snehappu'
            },
            {
              name  : 'GnanaSoundari'
            }
          ]
          }
        ]
      }
    ]
  }
];

const App = () => {
  const handleClick = (nodeData, evt) => {
    console.log(nodeData, evt);
  };
  const [toolTipText, setToolTipText] = useState('');

  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect width="20" height="20" x="-10" onClick={toggleNode} />
      <text fill="black" strokeWidth="1" x="20">
        {nodeDatum.name}
      </text>
      <text className="tooltip" fill="black" strokeWidth="1" x="40" y = "20">
      {nodeDatum.description}  
     </text>
      
    </g>
  );
  return (
   // <div className="totalwrap">
    <div id="treeWrapper" className="treewrap">
      <Tree 
        orientation="vertical"
        pathFunc="step"
        onNodeMouseOver = { (nodeData, evt) => {
          console.log(nodeData.data)
        }}
        renderCustomNodeElement = {renderRectSvgNode}
        
        

        data={familyData}
      />
    </div>
    //</div>
  );
};

export default App;

