import React from "react";

class Items extends React.Component {
  render() {
    const { key, item } = this.props;
    return (
      <li key={key} index={key}>
        <input name="name" value={item.name} />
      </li>
    );
  }
}

export default Items;
