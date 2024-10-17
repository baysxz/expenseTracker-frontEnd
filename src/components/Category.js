import EyeIcon from "../../public/icons/EyeIcon";
import ClosedEyeIcon from "../../public/icons/ClosedEyeIcon";

const Category = (props) => {
  const { categoryName, ischecked, onChange } = props;

  const icon = ischecked ? <EyeIcon /> : <ClosedEyeIcon />;
  // console.log(ischecked);
  return (
    <div
      onClick={onChange}
      className="w-full pl-3 py-1.5 flex gap-2 items-center">
      {icon}
      <p className="font-normal text-base text-[#1F2937]">{categoryName}</p>
    </div>
  );
};

export default Category;
