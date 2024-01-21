import { styled } from 'styled-components';

export const Form = styled.form`
  border: 3px solid;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  label {
    width: 90px;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 12px 20px;
  width: 300px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
`;
