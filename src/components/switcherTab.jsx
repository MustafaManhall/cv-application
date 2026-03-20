import "../styles/switcherTab.css";

function SwitcherTab({activeTab, handleActiveTab}) {
    return (
        <div className="switcher-btns">
            <button className={activeTab === "edit" ? "active" : ""} onClick={() => handleActiveTab("edit")}>Edit</button>
            <button className={activeTab === "preview" ? "active" : ""} onClick={() => handleActiveTab("preview")} >Preview</button>
        </div>
    );
}

export { SwitcherTab };
