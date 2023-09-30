import React from 'react';
import JsonData from './json/message.json';
import './JsonData.css';
  export class JsonDataDisplay extends React.Component{
        constructor(props){
            super(props);
            JsonData.sort((resA, resB)=> resB.score - resA.score);
            this.state ={ DisplayData: JsonData.map(
                (results)=>{
                    return(
                        <tr>
                            <td>{results.collage}</td>
                            <td>{results.city}</td>
                            <td>{results.ranking}</td>
                            <td>{results.category}</td>
                            <td>{results.fieldOfStudy}</td>
                            <td>{results.score}</td>
                        </tr>
                    )
                }
            )
        }
    }
        render(){
          return (
            <div>
                <table class="tb">
                    <thead>
                        <tr>
                        <th>Collage</th>
                        <th>City</th>
                        <th>Ranking</th>
                        <th>Category</th>
                        <th>Field of Study</th>
                        <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.DisplayData}
                    </tbody>
                </table>
                
            </div>
          );
        }

        

    }

    export default JsonDataDisplay;
      
