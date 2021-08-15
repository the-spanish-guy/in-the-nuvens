import React, { useState, useEffect } from 'react';

import folder from '.././../assets/folder.svg';
import file from '.././../assets/file.svg';

export default function List({ data: data1, isHorizontal = true }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data1);
    console.log(data1);
  });

  return (
    <div>
      {data.map((_) => (
        <div className="bg-lightBlue-50 inline-block m-4 p-2 rounded-sm">
          <div className="h-20 flex justify-center content-center">
            <img src={_.isFolder ? folder : file} />
          </div>
          <div>
            <p className="dark:text-tilte_folders-dark">{_.nome}</p>
            <span>{_.length}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
