import { Button } from "antd";
import React from "react";
import useReactive from "./component/index";

const Index: React.FC<any> = (props) => {
  const stateScope = useReactive<any>({
    count: 0,
    name: "小杜杜",
    flag: true,
    arr: [],
    bugs: ["小杜杜", "react", "hook"],
    addBug(bug: string) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  });

  return (
    <div className="p-20px">
      <div className="font-bold">基本使用：</div>
      <div className="mt-8px"> 对数字进行操作：{stateScope.count}</div>
      <div className="mt-8 mb-8 flex justify-start">
        <Button color="primary" onClick={() => stateScope.count++}>
          加1
        </Button>
        <Button color="primary" className="ml-8" onClick={() => stateScope.count--}>
          减1
        </Button>
        <Button
          color="primary"
          className="ml-8"
          onClick={() => (stateScope.count = 7)}
        >
          设置为7
        </Button>
      </div>
      <div className="mt-8"> 对字符串进行操作：{stateScope.name}</div>
      <div className="mt-8 mb-8 flex justify-start">
        <Button color="primary" onClick={() => (stateScope.name = "小杜杜")}>
          设置为小杜杜
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => (stateScope.name = "Domesy")}
        >
          设置为Domesy
        </Button>
      </div>
      <div style={{ marginTop: 8 }}>
        {" "}
        对布尔值进行操作：{JSON.stringify(stateScope.flag)}
      </div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button color="primary" onClick={() => (stateScope.flag = !stateScope.flag)}>
          切换状态
        </Button>
      </div>
      <div style={{ marginTop: 8 }}>
        {" "}
        对数组进行操作：{JSON.stringify(stateScope.arr)}
      </div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button
          color="primary"
          onClick={() => stateScope.arr.push(Math.floor(Math.random() * 100))}
        >
          push
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => stateScope.arr.pop()}
        >
          pop
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => stateScope.arr.shift()}
        >
          shift
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => stateScope.arr.unshift(Math.floor(Math.random() * 100))}
        >
          unshift
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => stateScope.arr.reverse()}
        >
          reverse
        </Button>
        <Button
          color="primary"
          style={{ marginLeft: 8 }}
          onClick={() => stateScope.arr.sort()}
        >
          sort
        </Button>
      </div>
      <div style={{ fontWeight: "bold", marginTop: 8 }}>计算属性：</div>
      <div style={{ marginTop: 8 }}>数量：{stateScope.bugsCount} 个</div>
      <div style={{ margin: "8px 0" }}>
        <form
          onSubmit={(e) => {
            stateScope.bug ? stateScope.addBug(stateScope.bug) : stateScope.addBug("domesy");
            stateScope.bug = "";
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={stateScope.bug}
            onChange={(e) => (stateScope.bug = e.target.value)}
          />
          <button type="submit" style={{ marginLeft: 8 }}>
            增加
          </button>
          <Button
            color="primary"
            style={{ marginLeft: 8 }}
            onClick={() => stateScope.bugs.pop()}
          >
            删除
          </Button>
        </form>
      </div>
      <ul>
        {stateScope?.bugs?.map((bug: any, index: number) => (
          <li key={index}>{bug}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
