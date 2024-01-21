import { Wrapper } from "./Filter.styled";

export const Filter = ({onFilter}) => {
  return (
    <Wrapper>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" name="filter" placeholder="Search" onChange={onFilter}/>
    </Wrapper>
  );
};
