import React from 'react';
import './leaderboard.css';

const Leaderboard = ({ data }) => {
    const sortedData = [...data].sort((a, b) => b.Score - a.Score);

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-heading">Leaderboard</h2>
            <div className="leaderboard-table-container">
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team Name</th>
                            <th>Total Games Played</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((item, index) => {
                            let rankElement;
                            if (index === 0) {
                                rankElement = <img src="https://cdn-icons-png.flaticon.com/512/5355/5355569.png" alt="1" className="rank-icon" />;
                            } else if (index === 1) {
                                rankElement = <img src="https://cdn-icons-png.flaticon.com/512/5355/5355703.png" alt="2" className="rank-icon" />;
                            } else if (index === 2) {
                                rankElement = <img src="https://cdn-icons-png.flaticon.com/512/5355/5355499.png" alt="3" className="rank-icon" />;
                            } else {
                                rankElement = <span>{index + 1}</span>;
                            }

                            return (
                                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                    <td>{rankElement}</td>
                                    <td>
                                        <div className="team-avatar">
                                            <img src={"https://img.freepik.com/free-vector/ninja-logo-template-gradient_23-2148999701.jpg?t=st=1714758743~exp=1714762343~hmac=7a6e158d8dfb288e2eec1a8e4c7241226b56f1dd280f81f6cb9e0dc5c9615f53&w=1380"} alt="Team Avatar" className="avatar-image" />
                                            {item.Name}
                                        </div>
                                    </td>
                                    <td>{item.Games}</td>
                                    <td>{item.Score}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
