const AddTask = ({handleSubmit, editid, task, setTask}) => {
    return (
        <section  className={editid ? 'updateTask' : 'addTask'}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task} autoComplete="off" placeholder="add task" maxLength="30" onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">{ editid ? "Update" : "Add"}</button>
          </form>
        </section>
    );
}

export default AddTask;