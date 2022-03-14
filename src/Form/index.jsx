import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';

export default function TodoForm({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
      <SubmitButton>추가</SubmitButton>
    </form>
  );
}