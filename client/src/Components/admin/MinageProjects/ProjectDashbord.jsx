import { Delete, Edit } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deletProject, edit } from "../../utils/api";
import UpdateForm from "../Update/UpdateForm";
const Container = styled.div`
  padding-top: 50px;
  .box {
    width: 70%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    margin: 0px auto;
  }
  a {
    color: white;
    text-transform: capitalize;
  }
  .dlt {
    cursor: pointer;
    margin-left: 25px;
    display: inline-block;
  }
  .buttons {
    cursor: pointer;
  }
`;

let updateData;
function ProjectDashbord({ props }) {
  const { projectName, sourcecodeurl, demourl, descrition, image, _id } = props;
  // console.log(props)
  const navigate = useNavigate();
  updateData = props;
  // =======>> function for dlt project <<======
  const dltProject = async () => {
    let resData = await deletProject(_id);
    //  =======>> This is alert Section <<=====
    if (!resData.data) {
      alert("Something is wrong not deleted This project");
    } else {
      alert("Project deleted sucessfully");
    }
  };
  // ========>> function for edit project <<==========
  const EditProject = async (_id) => {
    
    navigate(`/updateP/?id=${_id}`);
    
  };

  return (
    <Container className="mainBox">
      <div className="box">
        <a
          href={demourl || sourcecodeurl}
          target="_blank"
          style={{ wordSpacing: "4px" }}>
          <p>{projectName}</p>
        </a>
        <div className="buttons">
          <Edit onClick={() => EditProject(_id)} />
          <Delete className="dlt" onClick={dltProject} />
        </div>
      </div>
    </Container>
  );
}

export default ProjectDashbord;
export { updateData };
