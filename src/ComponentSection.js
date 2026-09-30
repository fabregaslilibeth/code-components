function ComponentSection({ title, children }) {
  return (
    <div className="component-section">
      <div className="component-label">{title}</div>
      {children}
    </div>
  );
}

export default ComponentSection;
