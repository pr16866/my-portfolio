import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../../GlobaleState/GlobaleState';
import { getAllData } from '../../utils/api';
import ProjectDashbord from './ProjectDashbord';



export default function MapProjects() {
  const [data, setdata] = useState([]);
  const [projects, setProjects] = useGlobalState("projects");
  useEffect(() => {
    AllData();
  }, []);

  const AllData = async () => {
    let resData = await getAllData();
    setdata(resData.data);
    setProjects(resData.data);
  };
//   console.log(projects);
  return (
    <div>
      {data.map((item, index) => {
        return <ProjectDashbord props={item} key={item._id} />;
      })}
    </div>
  );
}
