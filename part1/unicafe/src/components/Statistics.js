import React from "react";

const Statistics = ({ stats }) => {
  const getTotal = () => {
    return stats.reduce((total, num) => total + num);
  };
  const getAverage = () => {
    return (stats[0] - stats[2]) / getTotal();
  };
  const getPositive = () => {
    return (stats[0] / getTotal()) * 100;
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{stats[0]}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{stats[1]}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{stats[2]}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{getTotal() || 0}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{getAverage() || 0}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{`${getPositive() || 0}%`}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
