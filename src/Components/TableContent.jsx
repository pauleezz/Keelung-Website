import React, { Component } from "react";

class TableContent extends Component {
  render() {
    const { date, title, tag, dep, num } = this.props;
    return (
      <>
        <tr>
          <td class="text-center">{date}</td>
          <td>
            <div class="d-flex ">
              <div class="table-tag" style={{ background: tag[1] }}>
                {tag[0]}
              </div>
              {title}
            </div>
          </td>
          <td class="text-center">{dep}</td>
          <td class="text-center">{num}</td>
        </tr>
      </>
    );
  }
}

export default TableContent;
