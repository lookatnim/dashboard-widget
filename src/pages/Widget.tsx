import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Responsive, WidthProvider } from "react-grid-layout";
import image from "../assets/image.png";
import { SquareSigma } from "lucide-react";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const LOCAL_STORAGE_KEY = "widget-layout";

const Widget: React.FC = () => {
  const defaultLayout = {
    lg: [
      { i: "chart", x: 0, y: 0, w: 6, h: 4 },
      { i: "textbox", x: 6, y: 0, w: 6, h: 4 },
      { i: "list", x: 0, y: 4, w: 6, h: 4 },
      { i: "image", x: 6, y: 4, w: 6, h: 4 },
    ],
  };

  const [layouts, setLayouts] = useState(() => {
    // Load layout from localStorage or use default
    const savedLayout = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedLayout ? JSON.parse(savedLayout) : defaultLayout;
  });

  const [text, setText] = useState("Edit me!");
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a widget", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const chartData = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 70 },
    { name: "May", value: 60 },
  ];

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(event.target.value);
  };

  const toggleItemCompletion = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Save layout to localStorage on layout change
  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    setLayouts(allLayouts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allLayouts));
  };

  return (
    <ResponsiveReactGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      onLayoutChange={handleLayoutChange}
    >
      {/* Line Chart Widget */}
      <div
        key="chart"
        className="bg-white shadow rounded-xl p-4 h-full w-full pb-10"
      >
        <div className="flex absolute top-4 right-4 text-black px-3 py-1 rounded-lg text-sm justify-center items-center">
          <SquareSigma className="pr-2" /> $2,300
        </div>
        <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
        <ResponsiveContainer width="100%" height="93%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Editable Text Box Widget */}
      <div
        key="textbox"
        className="bg-white shadow rounded-xl p-4 h-full w-full min-h-[150px]"
      >
        <h2 className="text-xl font-bold mb-4">Editable Text Box</h2>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full border rounded-lg p-2 text-base md:text-lg lg:text-xl"
        />
      </div>

      {/* List of Items Widget */}
      <div
        key="list"
        className="bg-white shadow rounded-xl p-4 h-full w-full min-h-[200px] min-w-[200px]"
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          To-Do List
        </h2>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center text-sm md:text-base lg:text-lg"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItemCompletion(item.id)}
                className="mr-2 w-4 h-4 md:w-5 md:h-5"
              />
              <span
                className={`${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Static Image Widget */}
      <div
        key="image"
        className="bg-white shadow rounded-xl p-4 h-full w-full min-h-min"
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Static Image
        </h2>
        <img
          src={image}
          alt="Placeholder"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </ResponsiveReactGridLayout>
  );
};

export default Widget;
