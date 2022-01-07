const tasks = ["Arrumar a cama", "Escovar os dentes", "Tomar café", "Almoçar"]

function Task() {
  return (tasks.map((task) => <li>{task}</li>)
  );
}

export default Task;
