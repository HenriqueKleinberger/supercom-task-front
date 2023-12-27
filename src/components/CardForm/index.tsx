interface TaskFormProps {
  createCard: (e: React.FormEvent) => void;
}

const CardForm = ({ createCard }: TaskFormProps) => {
  return (
    <form onSubmit={createCard}>
      <input placeholder="Title" />
      <input placeholder="Description" />

      <input placeholder="DeadLine" type="date" />
      <label htmlFor="status">Task status:</label>

      <select name="status" id="status">
        <option value="To Do">To Do</option>
        <option value="In progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Save task</button>
    </form>
  );
};

export default CardForm;
