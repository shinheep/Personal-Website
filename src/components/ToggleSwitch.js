const ToggleSwitch = () => {
  
    return (
    <div className="toggle">
      <div class="toggle-switch">
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
