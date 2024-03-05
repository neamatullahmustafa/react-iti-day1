import React, { Component } from "react";
import styles from "./Task2.module.css";
import axios from "axios";

export default class Task2 extends Component {
  state = {
    title: "day2",
    items: [],
    start: 0,
    end: 5,
  };
   pageNext = () => {
    if (this.state.end < 200) {
        this.setState(prevState => ({
            start: prevState.start + 5,
            end: prevState.end + 5
        }));
    } else {
        this.setState({
            start: 0,
            end: 5
        });
    }
}

     pagePrevious=()=>{
    if (this.state.start >0) {
        this.setState(prevState => ({
            start: prevState.start - 5,
            end: prevState.end - 5
        }));
    } else {
        this.setState({
            start: 195,
            end: 200
        });
    }
}
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        this.setState({ items: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <h1 className="text-danger text-center ">Task 2</h1>
        <table className="table w-75 m-auto">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item) => {
              if (item.id > this.state.start && item.id <= this.state.end)
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.completed ? (
                    <i class="fa-solid fa-square-check  text-success fa-2xl"></i>
                      ) : (
                   <i class="fa-solid  fa-rectangle-xmark text-danger fa-2xl"></i>
                      )}
                    </td>
                  </tr>
                );
            })}
          </tbody>

        </table>   <div className="d-flex justify-content-between w-50 m-auto">
                          <button className="btn btn-danger me-0 mt-5" onClick={this.pagePrevious}>Previous</button>
                                                   <button className="btn btn-danger me-0 mt-5" onClick={this.pageNext}>Next</button>

</div>
      </>
    );
  }
}
