import HeaderShared from "../shared/header";

interface IProps {
  children: React.ReactElement;
}

const LayoutPages = ({ children }: IProps) => {
  return (
    <div>
      <HeaderShared />
      {children}
    </div>
  );
};

export default LayoutPages;
