import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSallesByTheme } from "../../Redux/actions/salle.actions";

const Tabs = ({ color }) => {
  const dispatch = useDispatch();
  const salles = useSelector((state) => state?.salle?.salletheme?.data);

  const [openTab, setOpenTab] = React.useState("silver");

  useEffect(() => {
    if (openTab) {
      dispatch(getSallesByTheme(openTab));
    }
  }, [dispatch, openTab]);

  const tabColors = {
    amber: {
      activeBg: "bg-[#f04e3c]",
      activeText: "text-white",
      inactiveBg: "bg-white",
      inactiveText: "text-amber-600",
    },
    blue: {
      activeBg: "bg-blue-600",
      activeText: "text-white",
      inactiveBg: "bg-white",
      inactiveText: "text-blue-600",
    },
    // Add more colors as needed
  };

  const currentColors = tabColors[color] || tabColors["amber"];

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === "silver"
                    ? `${currentColors.activeBg} ${currentColors.activeText}`
                    : `${currentColors.inactiveBg} ${currentColors.inactiveText}`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("silver");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Silver
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === "premium"
                    ? `${currentColors.activeBg} ${currentColors.activeText}`
                    : `${currentColors.inactiveBg} ${currentColors.inactiveText}`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("premium");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Premium
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === "gold"
                    ? `${currentColors.activeBg} ${currentColors.activeText}`
                    : `${currentColors.inactiveBg} ${currentColors.inactiveText}`
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab("gold");
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Gold
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === "silver" ? "block" : "hidden"}
                  id="link1"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {salles &&
                      salles.map((salle) => (
                        <div
                          key={salle.id}
                          className="max-w-xs bg-white border text-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                          <a href="#">
                            <img
                              className="w-full h-48 object-cover rounded-t-lg"
                              src={salle.file}
                              alt={`Image de ${salle.Nom}`}
                            />
                          </a>
                          <div className="p-3">
                            <a href="#">
                              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 text-gray-900">
                                {salle.Nom}
                              </h5>
                            </a>
                            <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                              {salle.description}
                            </p>
                            <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                              {salle.titre}
                            </p>
                            <Link
                              to={`/salle/${salle.id}`}
                              className="inline-block text-xs font-medium text-white bg-[#f04e3c] py-3 px-6 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                              Voir détails
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className={openTab === "premium" ? "block" : "hidden"}
                  id="link2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {salles &&
                      salles.map((salle) => (
                        <div
                          key={salle.id}
                          className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                          <a href="#">
                            <img
                              className="w-full h-48 object-cover rounded-t-lg"
                              src={salle.file}
                              alt={`Image de ${salle.Nom}`}
                            />
                          </a>
                          <div className="p-3">
                            <a href="#">
                              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                {salle.Nom}
                              </h5>
                            </a>
                            <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                              {salle.description}
                            </p>
                            <p className="mb-1 text-sm text-gray-900 text-gray-900">
                              {salle.titre}
                            </p>
                            <Link
                              to={`/salle/${salle.id}`}
                              className="inline-block text-xs font-medium text-white bg-[#f04e3c] py-3 px-6 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                              Voir détails
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  className={openTab === "gold" ? "block" : "hidden"}
                  id="link3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {salles &&
                      salles.map((salle) => (
                        <div
                          key={salle.id}
                          className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                          <a href="#">
                            <img
                              className="w-full h-48 object-cover rounded-t-lg"
                              src={salle.file}
                              alt={`Image de ${salle.Nom}`}
                            />
                          </a>
                          <div className="p-3">
                            <a href="#">
                              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 text-gray-900">
                                {salle.Nom}
                              </h5>
                            </a>
                            <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                              {salle.description}
                            </p>
                            <p className="mb-1 text-sm text-gray-900 text-gray-900">
                              {salle.titre}
                            </p>
                            <Link
                              to={`/salle-gold/${salle.id}`}
                              className="inline-block text-xs font-medium text-white bg-[#f04e3c] py-3 px-6 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                              Voir détails
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="amber" />
    </>
  );
}
