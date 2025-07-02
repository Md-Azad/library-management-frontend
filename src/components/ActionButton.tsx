const ActionButton = () => {
  return (
    <div className="flex gap-4 items-center">
      <button className="btn btn-success">Borrow</button>
      <button className="btn btn-warning">Edit</button>
      <button className="btn btn-error">Delete</button>
    </div>
  );
};

export default ActionButton;
