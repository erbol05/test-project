"use client";
import scss from "./ToDoList.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

interface iToDoList {
  name: string;
  image: string;
  email: string;
  descrition: string;
  id: number
}
const ToDoList = () => {
  const { register, handleSubmit, reset } = useForm<iToDoList>();
  const [state, setState] = useState<iToDoList[]>([]);
  const addToDo: SubmitHandler<iToDoList> = (data) => {
    console.log(data, "hello");
  
    axios.post(
      "https://api-v2.elchocrud.pro/api/v1/16500b6ef30539eaf364677f5e55b7c9/next",
      data
    );
    reset();
    console.log(data, "data");
  };
  async function getNext() {
    const { data } = await axios.get(
      `https://api-v2.elchocrud.pro/api/v1/16500b6ef30539eaf364677f5e55b7c9/next`
    );
    setState(data);
  }
  useEffect(() => {
    getNext();
  }, []);
  async function deleteToDo(id: number) {
    await axios.delete(
      `https://api-v2.elchocrud.pro/api/v1/16500b6ef30539eaf364677f5e55b7c9/next/${id}`
    );
    getNext();
  }
  console.log(state);
  
  return (
    <div className={scss.Todolist}>
      <div className="container">
        <div className={scss.content}>
          <h1>ToDoList</h1>
          <form onSubmit={handleSubmit(addToDo)}>
            <input
              type="text"
              placeholder="image"
              {...register("image", { required: true })}
            />
            <input
              type="text"
              placeholder="name"
              {...register("name", {
                required: true,
                minLength: 3,
                // maxLength: 14,
              })}
            />
            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={scss.product}>
          {state.map((el) => (
            <div className={scss.pro} key={el._id}>
              <img src={el.image} alt=""/>
              <h1>{el.name}</h1>
              <h2>{el.email}</h2> 
              <button onClick={() => deleteToDo(el._id)}>удалит</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
