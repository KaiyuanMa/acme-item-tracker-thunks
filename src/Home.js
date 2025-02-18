import React from "react";
import { connect } from "react-redux";

const Home = ({ users, things, topRankedThing, topRankedUser }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have {users.length} users and{" "}
        {things.length} things!
      </p>
      <h2>Top Ranked Things</h2>
      <ul>
        {topRankedThing.map((thing) => {
          return <li key={thing.id}>{thing.name}</li>;
        })}
      </ul>
      <h2>Top Ranked Users</h2>
      <ul>
        {topRankedUser.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

const mapSToP = (s) => {
  const topRankThings = Math.max(...s.things.map((thing) => thing.ranking));
  const topRankedThing = s.things.filter(
    (thing) => thing.ranking === topRankThings
  );
  const topRankUsers = Math.max(...s.users.map((user) => user.ranking));
  const topRankedUser = s.users.filter((user) => user.ranking === topRankUsers);
  return {
    users: s.users,
    things: s.things,
    topRankedThing,
    topRankedUser,
  };
};

export default connect(mapSToP)(Home);
