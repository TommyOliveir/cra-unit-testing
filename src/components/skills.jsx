import PropTypes from "prop-types";

export const Skills = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill} </li>;
        })}
      </ul>
    </>
  );
};

 Skills.propTypes = {
   skills: PropTypes.array,
 };