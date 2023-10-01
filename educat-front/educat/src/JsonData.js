import React from 'react';
import JsonData from './json/message.json';
import './JsonData.css';

class JsonDataDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JsonData,
      sortBy: 'score', 
      cityFilter: '', 
      sortDescending: true,
    };
  }

  getCitiesList = () => {
    const cities = [...new Set(this.state.data.map((result) => result.city))];
    return cities;
  };

  handleSort = (field) => {
    const { data, sortBy, sortDescending } = this.state;
    const isDescending = sortBy !== field || sortDescending;

    const sortedData = [...data].sort((a, b) => {
      if (field === 'score' || field === 'ranking') {
        return isDescending ? b[field] - a[field] : a[field] - b[field];
      } else {
        const nameA = a[field].toUpperCase();
        const nameB = b[field].toUpperCase();
        return isDescending ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
      }
    });

    this.setState({
      data: sortedData,
      sortBy: field,
      sortDescending: !isDescending,
    });
  };

  handleCityFilter = (city) => {
    this.setState({ cityFilter: city });
  };

  render() {
    const { data, sortBy, sortDescending, cityFilter } = this.state;
    const citiesList = this.getCitiesList();

    const filteredData = data.filter((result) =>
      cityFilter ? result.city === cityFilter : true
    );

    return (
      <div>
        <div>
          <label className='Text'>Filter by City:</label>
          <select
            onChange={(e) => this.handleCityFilter(e.target.value)}
            value={cityFilter}
          >
            <option value="">All</option>
            {citiesList.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <table className="tb">
          <thead>
            <tr>
              <th onClick={() => this.handleSort('collage')}>
                College {sortBy === 'collage' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
              <th onClick={() => this.handleSort('city')}>
                City {sortBy === 'city' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
              <th onClick={() => this.handleSort('ranking')}>
                Ranking {sortBy === 'ranking' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
              <th onClick={() => this.handleSort('category')}>
                Category {sortBy === 'category' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
              <th onClick={() => this.handleSort('fieldOfStudy')}>
                Field of Study {sortBy === 'fieldOfStudy' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
              <th onClick={() => this.handleSort('score')}>
                Score {sortBy === 'score' ? (sortDescending ? '⬆' : '⬇') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((result, index) => (
              <tr key={index}>
                <td>{result.collage}</td>
                <td>{result.city}</td>
                <td>{result.ranking}</td>
                <td>{result.category}</td>
                <td>{result.fieldOfStudy}</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default JsonDataDisplay;
