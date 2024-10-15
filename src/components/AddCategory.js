import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";

const AddCategory = (props) => {
  const { onCloseModal } = props;
  const [category, setCategory] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
};

const handleName = (e) => {
  setName(e.target.value);
};
const handleDescription = (e) => {
  setDescription(e.target.value);
};
const handleImg = (e) => {
  setCategoryImg(e.target.value);
};

const handleAddCategory = async () => {
  await axios
    .post("http://localhost:8888/category/addCategory", {
      name: name,
      description: description,
      categoryImg: categoryImg,
    })
    .then(function (response) {
      setName("");
      setDescription("");
      setCategoryImg("");
      console.log(response);
    })
    .catch(function (error) {
      setName("");
      setDescription("");
      setCategoryImg("");
      console.log(error);
    });
};
<div>
  <h3>Add Category</h3>
  <div className="flex">
    <details className="dropdown">
      <summary className="btn m-1">open or close</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a>Icon</a>
        </li>
        <li>
          <a>Icon</a>
        </li>
      </ul>
    </details>
    <input
      onChange={handleName}
      type="text"
      placeholder="Name"
      className="input input-bordered w-full max-w-xs"
    />
  </div>
</div>;
<div>
  <button onClick={handleAddCategory} className="btn btn-success">
    Add
  </button>
</div>;
