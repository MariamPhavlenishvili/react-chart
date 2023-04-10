import { Column } from "@ant-design/charts";
import { useEffect } from "react";
// import getData from "../data/data";
import axios from "axios";

const Chart = () => {
  useEffect(() => {
    const con = axios.get("localhost:3001/campaign-data");
    console.log(con)
  }, []);
  // const data = await axios.get("localhost:3001/campaign-data");
  // console.log("data:", data);

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

  const transformedData = segment.flatMap((item) => [
    {
      tag: item.tag,
      type: "count",
      value: item.count,
    },
    {
      tag: item.tag,
      type: "female",
      value: item.female,
    },
    {
      tag: item.tag,
      type: "male",
      value: item.male,
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
        text: "Value",
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
