import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";
import axios from "axios";

const Chart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/campaign-data")
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.log(error.message);
      });

  }, []);

  const segment = [
    {
      tag: "MyAutoClient",
      count: 1000,
      female: 760,
      male: 140,
    },
    {
      tag: "MyAutoClient1",
      count: 1040,
      female: 531,
      male: 354,
    },
  ];

  const transformedData = data.flatMap((item) => [
    {
      tag: item["tag"],
      type: "count",
      value: item["count"],
    },
    {
      tag: item["tag"],
      type: "female",
      value: item["female"],
    },
    {
      tag: item["tag"],
      type: "male",
      value: item["male"],
    },
  ]);

  const config = {
    data: transformedData,
    isGroup: true,
    xField: "tag",
    yField: "value",
    seriesField: "type",
    groupField: "type",
    yAxis: {
      title: {
        text: "Count",
      },
    },
    Label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };

  return <Column {...config} />;
};

export default Chart;
