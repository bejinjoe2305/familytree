import React from 'react';

class FamilyTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      familyData: props.familyData
    };
  }

  render() {
    return (
      <ul>
        {this.state.familyData.map(member => (
          <li key={member.name}>
            {member.name} ({member.spouse})
            {member.children && (
              <FamilyTree familyData={member.children} />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default FamilyTree;
