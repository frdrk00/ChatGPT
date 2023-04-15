import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>

          {/* Map through there ChatTows */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
