import "../../fonts.css";
import { useState } from "react";

const Visualisation = () => {

  const api = "https://northenmed.com/sih/maps/"

  const [mapType, setMapType] = useState(
    "https://northenmed.com/sih/maps/cluster_map.html"
  );


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-[90vh] py-8 bg-dark-blue border-r">
        <h2 className="text-3xl font-semibold px-5 text-white font-poppins-600">
          Visualisations
        </h2>
     
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <div
              onClick={() =>
                setMapType(api + "marker_cluster_map.html")
              }
              className="flex items-center px-4 py-2 text-white bg-gray-900"
            >
              <span className="mx-4 text-lg font-normal rounded-md">
                Interactive Maps
              </span>
            </div>
            <div
              onClick={() =>
                setMapType(api + "india_map_cluster_lines.html")
              }
              className="flex items-center px-4 py-2 mt-2 text-gray-300  hover:bg-gray-600 hover:text-white"
            >
              <span className="mx-4 text-lg font-normal">Lines Map</span>
            </div>
            <div
              onClick={() =>
                setMapType(api + "heatmap_with_layers.html")
              }
              className="flex items-center px-4 py-2 mt-2 text-gray-300  hover:bg-gray-600 hover:text-white"
            >
              <span className="mx-4 text-lg font-normal">Heat Map</span>
            </div>
            <div
              onClick={() =>
                setMapType(api+"groundwater_pie_chart.html")
              }
              className="flex items-center px-4 py-2 mt-2 text-gray-300  hover:bg-gray-600 hover:text-white"
            >
              <span className="mx-4 text-lg font-normal">Pie Chart</span>
            </div>
            <div
              onClick={() =>
                setMapType(api+"marker_cluster_map.html")
              }
              className="flex items-center px-4 py-2 mt-2 text-gray-300  hover:bg-gray-600 hover:text-white"
            >
              <span className="mx-4 text-lg font-normal">Cluster Map</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Maps */}
      <div className="w-full">
        <iframe
          title="My Embedded Content"
          src={mapType}
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
          className="h-full w-full"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    </div>
  );
};

export default Visualisation;
