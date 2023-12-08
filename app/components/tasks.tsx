"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const Tasks = () => {
  const [dialogOn, setDialogOn] = useState(false);
  const [option, setOption] = useState("");
  const [inputHandlerText, setInputHandler] = useState("");
  const [curId, setCurId] = useState<number>(0);
  const [tasks, setTasks] = useState([
    {
      text: "",
      option: "",
    },
  ]);

  const [tweetsF, setTweets] = useState<any[] | null>([]);
  const deleteTweet = async (id: number) => {
    const { error } = await supabase.from("tweetsss").delete().eq("id", id);
  };
  const selectedOption = (e: any) => {
    setOption(e.target.value);
  };
  const inputHandler = (e: any) => {
    setInputHandler(e.target.value);
  };
  const confirmHandler = () => {
    if (inputHandlerText !== "") {
      insertData(inputHandlerText);
    }
  };

  const insertData = async (text: string) => {
    const { data, error } = await supabase
      .from("tweetsss")
      .insert([{ text: text }])
      .select();
    const id = data?.map((d) => d.id);
    setCurId(Number(id));
  };
  useEffect(() => {
    if (inputHandlerText !== "") {
      insertData(inputHandlerText);
    }
    fetchTweet();
  }, []);
  useEffect(() => {}, [insertData]);
  return (
    <div>
      {tweetsF?.map((tweet) => (
        <div key={tweet.id}>{tweet.text}</div>
      ))}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="text-black"
          value={inputHandlerText}
          type="text"
          onChange={inputHandler}
        />
        <button onClick={confirmHandler}>add Task</button>
      </form>
      {tasks.map((task, idx) => (
        <div key={idx}>
          <p>{task.text}</p>
          <p>{task.option}</p>
        </div>
      ))}
      {dialogOn && (
        <div>
          <form
            className="flex flex-col gap-4  w-full bg-slate-600 p-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="text" className="text-sm">
              task
            </label>
            <input
              type="text"
              onChange={inputHandler}
              value={inputHandlerText}
              id="text"
              className="text-black"
            />
            <label htmlFor="select" className="text-sm">
              select
            </label>
            <select
              name=""
              id="select"
              className="text-black"
              onClick={selectedOption}
            >
              <option value=""></option>
              <option value="backlog">backlog</option>
              <option value="in progress">in progress</option>
              <option value="">asda</option>
              <option value="completed">completed</option>
            </select>
            <button onClick={confirmHandler}>confirm</button>
          </form>
        </div>
      )}
    </div>
  );
};
